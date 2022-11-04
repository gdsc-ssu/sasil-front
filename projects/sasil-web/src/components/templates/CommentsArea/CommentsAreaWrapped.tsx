import { useCallback, useRef, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';
import { useAtom } from 'jotai';

import {
  getCommentListAsync,
  addCommentAsync,
  deleteCommentAsync,
} from '@sasil/common';
import { URL_INFO } from '@/constants/urlInfo';
import useInifiniteScroll from '@/logics/hooks/useInfiniteScroll';
import { getUserInfoAtom } from '@/logics/store/actions';
import CommentsArea from './CommentsArea';

const CommentsAreaWrapped = () => {
  const router = useRouter();

  const postType = router.query.type as 'experiment' | 'request';
  const postId = Number(router.query.pid);
  const display = 10;

  const [userInfo] = useAtom(getUserInfoAtom);

  const commentsRef = useRef(null);

  const { data, isFetching, hasNextPage, fetchNextPage, refetch } =
    useInfiniteQuery(
      ['comments', { postType, postId }],
      ({ pageParam = 1 }) =>
        getCommentListAsync(postType, postId, pageParam, display),
      {
        getNextPageParam: (lastPage) => {
          if (!lastPage.isSuccess || lastPage.result.isLast) {
            return undefined;
          }

          return lastPage.result.nextPage;
        },
        staleTime: 300000, // TODO: 일단 cache-time의 default 값인 5분과 동일하게 맞춤
      },
    );

  const getCommentList = async () => {
    if (hasNextPage) {
      await fetchNextPage();
    }
  };

  useInifiniteScroll(commentsRef, getCommentList);

  const comments = data?.pages
    .map((res) => (res.isSuccess ? res.result.list : []))
    .flat();

  const [commentValue, setCommentValue] = useState('');

  const onCommentTextChange = useCallback((text: string) => {
    setCommentValue(text);
  }, []);

  const addComment = useCallback(async () => {
    if (commentValue.length > 0) {
      if (!userInfo?.token) {
        router.push(URL_INFO.login);
        return;
      }

      await addCommentAsync(userInfo.token, postType, postId, commentValue);

      onCommentTextChange('');

      await refetch();
    }
  }, [
    userInfo,
    commentValue,
    onCommentTextChange,
    postId,
    postType,
    refetch,
    router,
  ]);

  const canWrite = useMemo(
    () => commentValue.length > 0,
    [commentValue.length],
  );

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

  const [commInfo, setCommInfo] = useState({
    commId: 0,
    writerId: 0,
  });

  const updateCommInfo = useCallback((commId, writerId) => {
    setCommInfo({ commId, writerId });
  }, []);

  const onDeleteComment = useCallback(async () => {
    setMenuDisplayInfo((prev) => ({
      ...prev,
      display: !prev.display,
    }));

    if (!userInfo?.token) {
      router.push(URL_INFO.login);
      return;
    }

    await deleteCommentAsync(userInfo.token, postType, postId, commInfo.commId);

    await refetch();
  }, [commInfo.commId, postId, postType, refetch, router, userInfo]);

  const onReportComment = useCallback(() => {
    // TODO 댓글 신고
    setMenuDisplayInfo((prev) => ({
      ...prev,
      display: !prev.display,
    }));
  }, []);

  return (
    <CommentsArea
      comments={comments}
      inputValue={commentValue}
      onCommentTextChange={onCommentTextChange}
      addComment={addComment}
      canWrite={canWrite}
      ref={commentsRef}
      menuDisplayInfo={menuDisplayInfo}
      onMenuDisplayToggle={onMenuDisplayToggle}
      onDeleteComment={onDeleteComment}
      onReportComment={onReportComment}
      isWriter={userInfo?.id === commInfo.writerId}
      updateCommInfo={updateCommInfo}
    />
  );
};

export default CommentsAreaWrapped;
