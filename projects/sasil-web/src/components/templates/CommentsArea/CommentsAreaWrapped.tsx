import { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';
import { useAtom } from 'jotai';

import { getCommentListAsync, addCommentAsync } from '@sasil/common';
import useInifiniteScroll from '@/logics/hooks/useInfiniteScroll';
import CommentsArea from './CommentsArea';

const CommentsAreaWrapped = () => {
  const router = useRouter();

  const postType = router.query.type as 'experiment' | 'request';
  const postId = Number(router.query.pid);
  const display = 10;

  const accessToken = ''; // TODO: Jotai

  const commentsRef = useRef(null);

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
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

  // TODO: onSubmitComment (Form?)

  return (
    <CommentsArea
      comments={comments}
      inputValue={commentValue}
      onCommentTextChange={onCommentTextChange}
      ref={commentsRef}
    />
  );
};

export default CommentsAreaWrapped;
