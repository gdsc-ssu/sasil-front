import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import {
  addBookmarkAsync,
  addLikeAsync,
  deleteBookmarkAsync,
  deleteLikeAsync,
  getPostDetailAsync,
  getRelativePosts,
  deletePostAsync,
  PostDetailType,
  RelativePostType,
} from '@sasil/common';
import { URL_INFO } from '@/constants/urlInfo';
import { getUserInfoAtom } from '@/logics/store/actions';

// Toast Viewer를 사용하기 위한 ssr 해제
const PostDetailTemplate = dynamic(
  () => import('@/components/templates/PostDetailTemplate'),
  { ssr: false },
);

const PostDetail: NextPage = () => {
  const router = useRouter();

  const postType = router.query.type as 'experiment' | 'request';
  const postId = Number(router.query.pid);
  const [userInfo] = useAtom(getUserInfoAtom);

  const [realPost, setRealPost] = useState<PostDetailType | undefined>(
    undefined,
  );
  const [relativePosts, setReltativePosts] = useState<
    RelativePostType[] | undefined
  >(undefined);

  const [likeInfo, setLike] = useState({ isLike: false, likeCount: 0 });
  const [bookmarkInfo, setBookmark] = useState({
    isBookmark: false,
    bookmarkCount: 9,
  });

  // 드롭다운 메뉴 관련
  const [menuDisplayInfo, setMenuDisplayInfo] = useState({
    display: false,
    top: 0,
  });

  const onMenuDisplayToggle = useCallback((top?: number) => {
    setMenuDisplayInfo((prev) => ({
      display: !prev.display,
      top: top ?? 0,
    }));
  }, []);

  useEffect(() => {
    if (!postType || !postId || !router.isReady) {
      return;
    }

    const getInitialData = async () => {
      // content
      const postDetailResult = await getPostDetailAsync(
        userInfo?.token ?? '', // Access Token이 없어도 정상 동작
        postType,
        postId,
      );

      setRealPost((prev) =>
        postDetailResult.isSuccess ? postDetailResult.result : prev,
      );

      // relative post
      const relativePostResult = await getRelativePosts(postType, postId);

      setReltativePosts((prev) =>
        relativePostResult.isSuccess ? relativePostResult.result : prev,
      );

      // interest
      setLike((prev) =>
        postDetailResult.isSuccess
          ? {
              isLike: postDetailResult.result.isLike,
              likeCount: postDetailResult.result.likeCount,
            }
          : prev,
      );

      setBookmark((prev) =>
        postDetailResult.isSuccess
          ? {
              isBookmark: postDetailResult.result.isBookmark,
              bookmarkCount: postDetailResult.result.bookmarkCount,
            }
          : prev,
      );
    };

    getInitialData();
  }, [userInfo, postId, postType, router.isReady]);

  const handleLike = useCallback(async () => {
    if (!userInfo?.token) {
      router.push(URL_INFO.login);
      return;
    }

    const result = likeInfo.isLike
      ? await deleteLikeAsync(userInfo.token, postType, postId)
      : await addLikeAsync(userInfo.token, postType, postId);

    if (result.isSuccess) {
      setLike((prev) => ({
        ...prev,
        likeCount: prev.isLike ? prev.likeCount - 1 : prev.likeCount + 1,
        isLike: !prev.isLike,
      }));
    }
  }, [userInfo, likeInfo.isLike, postId, postType, router]);

  const handleBookmark = useCallback(async () => {
    if (!userInfo?.token) {
      router.push(URL_INFO.login);
      return;
    }
    const result = bookmarkInfo.isBookmark
      ? await deleteBookmarkAsync(userInfo.token, postType, postId)
      : await addBookmarkAsync(userInfo.token, postType, postId);

    if (result.isSuccess) {
      setBookmark((prev) => ({
        ...prev,
        bookmarkCount: prev.isBookmark
          ? prev.bookmarkCount - 1
          : prev.bookmarkCount + 1,
        isBookmark: !prev.isBookmark,
      }));
    }
  }, [userInfo, bookmarkInfo.isBookmark, postId, postType, router]);

  // 게시물 작성자 여부
  const isWriter = userInfo?.id === realPost?.user?.id;

  const deletePost = useCallback(async () => {
    if (!isWriter) {
      return;
    }

    if (!userInfo?.token) {
      router.push(URL_INFO.login);
      return;
    }

    await deletePostAsync(userInfo.token, postType, postId);

    router.push('/');
  }, [isWriter, postId, postType, router, userInfo]);

  if (realPost === undefined || relativePosts === undefined) {
    return <>로딩중 </>;
  }

  return (
    <PostDetailTemplate
      type={postType}
      post={realPost as PostDetailType}
      relativePosts={relativePosts}
      likeInfo={likeInfo}
      bookmarkInfo={bookmarkInfo}
      handleLike={handleLike}
      handleBookmark={handleBookmark}
      deletePost={deletePost}
      menuDisplayInfo={menuDisplayInfo}
      onMenuDisplayToggle={onMenuDisplayToggle}
      isWriter={isWriter}
    />
  );
};

export default PostDetail;
