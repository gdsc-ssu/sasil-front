import React, { useRef, useState } from 'react';
import { addPostAsync, getImgUploadURLAsync } from '@sasil/common';
import { postAsync } from '@sasil/common/dist/apis/apiUtils';
import { useRouter } from 'next/router';
import { Editor as EditorType } from '@toast-ui/react-editor';
import { HookCallback } from '@/components/molelcules/Editor/Editor';
import { useAtom } from 'jotai';
import { getUserInfoAtom } from '@/logics/store/actions';
import PostEditor from './PostEditor';

type WriteDataType = {
  title: string;
  thumbnail: string;
  cgValue: string;
  cgInputList: string[];
};

export interface PostEditorWrappedProps {
  type: 'request' | 'experiment';
}

const PostEditorWrapped = ({ type }: PostEditorWrappedProps) => {
  const editorRef = useRef<EditorType>();

  const router = useRouter();
  const { reqId } = router.query;
  const [userInfo] = useAtom(getUserInfoAtom);

  const [writeData, setWriteData] = useState<WriteDataType>({
    title: '',
    thumbnail: '',
    cgValue: '',
    cgInputList: [],
  });

  const onTitleChange = (text: string) => {
    setWriteData({ ...writeData, title: text });
  };

  const onCgValueChange = (text: string) =>
    setWriteData({ ...writeData, cgValue: text });

  // 카테고리 추가 및 삭제 함수
  const handleCategories = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' && !e.nativeEvent.isComposing && writeData.cgValue) {
      setWriteData({
        ...writeData,
        cgInputList: [...writeData.cgInputList, writeData.cgValue],
        cgValue: '',
      });
    } else if (e.code === 'Backspace' && !writeData.cgValue) {
      setWriteData({
        ...writeData,
        cgInputList: writeData.cgInputList.slice(0, -1),
      });
    }
  };

  // 이미지 업로드 함수
  const onUploadImage = async (blob: Blob | File, callback: HookCallback) => {
    if (!userInfo?.token) {
      return;
    }
    const res = await getImgUploadURLAsync(userInfo.token);
    if (res.isSuccess) {
      const formData = new FormData();
      formData.append('file', blob, 'test');

      const uploadUrl = res.result.imgUploadURL; // 이미지 업로드 할 수 있는 url
      const uploadRes = await postAsync<
        {
          result: {
            variants: string[];
          };
        },
        FormData
      >(uploadUrl, formData);

      if (uploadRes.isSuccess) {
        const imageUrl = uploadRes.result.result.variants[0]; // 최종 이미지 url
        callback(imageUrl, 'image'); // editor에 등록
        setWriteData((prev) => {
          if (prev.thumbnail) return prev;
          return {
            ...prev,
            thumbnail: imageUrl,
          };
        });
      }
    }
  };

  const onSubmit = async () => {
    const mdText = editorRef.current?.getInstance().getMarkdown();
    // @ts-ignore
    const uniqueCgInputSet = [...new Set(writeData.cgInputList)]; // 카테고리 리스트 중복 제거

    if (mdText) {
      if (!userInfo?.token) {
        router.push('/login');
        return;
      }

      const res = await addPostAsync(
        userInfo.token,
        type as 'request' | 'experiment',
        writeData.title,
        mdText,
        uniqueCgInputSet,
        writeData.thumbnail,
        Number(reqId),
      );
      if (res.isSuccess) {
        router.push(`/post/${type}/${res.result.id}`);
      }
    }
  };
  const onCancel = () => router.back();

  return (
    <PostEditor
      editorRef={editorRef}
      title={writeData.title}
      cgValue={writeData.cgValue}
      cgInputList={writeData.cgInputList}
      onTitleChange={onTitleChange}
      onCgValueChange={onCgValueChange}
      handleCategories={handleCategories}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onUploadImage={onUploadImage}
    />
  );
};

export default PostEditorWrapped;
