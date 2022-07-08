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
  PostDetailType,
  RelativePostType,
} from '@sasil/common';
import { getAccessTokenAtom } from '@/logics/store/actions';

// Toast Viewer를 사용하기 위한 ssr 해제
const PostDetailTemplate = dynamic(
  () => import('@/components/templates/PostDetailTemplate'),
  { ssr: false },
);

const PostDetail: NextPage = () => {
  const router = useRouter();

  const postType = router.query.type as 'experiment' | 'request';
  const postId = Number(router.query.pid);
  const [accessToken] = useAtom(getAccessTokenAtom);

  const [realPost, setRealPost] = useState({});
  const [relativePosts, setReltativePosts] = useState([] as RelativePostType[]);

  const [likeInfo, setLike] = useState({ isLike: false, likeCount: 0 });
  const [bookmarkInfo, setBookmark] = useState({
    isBookmark: false,
    bookmarkCount: 9,
  });

  useEffect(() => {
    if (!postType || !postId) {
      return;
    }

    const getInitialData = async () => {
      // content
      const postDetailResult = await getPostDetailAsync(
        accessToken ?? '', // Access Token이 없어도 정상 동작
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
  }, [accessToken, postId, postType]);

  const handleLike = useCallback(async () => {
    if (!accessToken) {
      return; // TODO: 로그인 필요 기능 알림
    }

    const result = likeInfo.isLike
      ? await deleteLikeAsync(accessToken, postType, postId)
      : await addLikeAsync(accessToken, postType, postId);

    if (result.isSuccess) {
      setLike((prev) => ({
        ...prev,
        likeCount: prev.isLike ? prev.likeCount - 1 : prev.likeCount + 1,
        isLike: !prev.isLike,
      }));
    }
  }, [accessToken, likeInfo.isLike, postId, postType]);

  const handleBookmark = useCallback(async () => {
    if (!accessToken) {
      return; // TODO: 로그인 필요 기능 알림
    }

    const result = bookmarkInfo.isBookmark
      ? await deleteBookmarkAsync(accessToken, postType, postId)
      : await addBookmarkAsync(accessToken, postType, postId);

    if (result.isSuccess) {
      setBookmark((prev) => ({
        ...prev,
        bookmarkCount: prev.isBookmark
          ? prev.bookmarkCount - 1
          : prev.bookmarkCount + 1,
        isBookmark: !prev.isBookmark,
      }));
    }
  }, [accessToken, bookmarkInfo.isBookmark, postId, postType]);

  return (
    <PostDetailTemplate
      type={postType}
      post={realPost as PostDetailType}
      relativePosts={relativePosts}
      likeInfo={likeInfo}
      bookmarkInfo={bookmarkInfo}
      handleLike={handleLike}
      handleBookmark={handleBookmark}
    />
  );
};

export default PostDetail;
