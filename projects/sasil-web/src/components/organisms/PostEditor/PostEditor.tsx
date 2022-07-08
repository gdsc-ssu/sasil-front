import { MutableRefObject } from 'react';
import StyledButton from '@/components/atoms/StyledButton';
import { Editor as EditorType } from '@toast-ui/react-editor';
import { TEXT_STYLE_NAME } from '@sasil/common';
import TextInput from '@/components/atoms/TextInput';
import Editor from '@/components/molelcules/Editor';
import { onUploadImageType } from '@/components/molelcules/Editor/Editor';
import CategoryInputBar, { CategoryInputBarProps } from './CategoryInputBar';
import * as styles from './PostEditor.style';

export interface PostEditorProps extends CategoryInputBarProps {
  editorRef?: MutableRefObject<EditorType | undefined>;
  title: string;
  onTitleChange?: (text: string) => void;
  onUploadImage?: onUploadImageType;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const PostEditor = ({
  editorRef,
  title,
  cgValue,
  cgInputList,
  onSubmit,
  onCancel,
  onTitleChange,
  onCgValueChange,
  onUploadImage,
  handleCategories,
}: PostEditorProps) => (
  <styles.EditorWrap>
    <styles.CategoriesWrap>
      <CategoryInputBar
        cgValue={cgValue}
        cgInputList={cgInputList}
        onCgValueChange={onCgValueChange}
        handleCategories={handleCategories}
      />
    </styles.CategoriesWrap>
    <TextInput
      value={title}
      onTextChange={onTitleChange}
      placeholder="제목을 입력하세요"
      className="title-input"
      textStyleName={TEXT_STYLE_NAME.subtitle2B}
    />
    <Editor ref={editorRef} onUploadImage={onUploadImage} />
    <styles.ButtonWrap>
      <StyledButton
        text="작성하기"
        textStyleName={TEXT_STYLE_NAME.button2B}
        onClick={onSubmit}
      />
      <StyledButton
        text="취소하기"
        textStyleName={TEXT_STYLE_NAME.button2B}
        className="cancel-btn"
        onClick={onCancel}
      />
    </styles.ButtonWrap>
  </styles.EditorWrap>
);

export default PostEditor;
