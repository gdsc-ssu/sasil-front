import { useCallback, useMemo } from 'react';
import {
  getPostsAsync,
  ResultType,
  PostInfoType,
  QUERY_KEYS,
} from '@sasil/common';
import { useInfiniteQuery } from 'react-query';

import { expPosts, categories } from '@/components/dummyData';
import ReqExpTemplate from '@/components/templates/ReqExpTemplate';
import PostsWrap from '@/components/templates/PostsWrap';
import * as styles from './ExperimentScreen.style';

async function getRequests({ pageParam = 1 }) {
  const result = await getPostsAsync(
    'experiment',
    pageParam,
    16,
    'recent',
    'all',
  );
  if (result.isSuccess) {
    return result.result;
  }

  throw result.result.errorMessage;
}

const RequestScreen = () => {
  const sortType = 'recent'; // TODO

  const { data, fetchNextPage, isRefetching, refetch } = useInfiniteQuery<
    ResultType<PostInfoType[]>
  >([QUERY_KEYS.requests], getRequests, {
    getNextPageParam: (lastPage) =>
      lastPage.isLast ? undefined : lastPage.nextPage,
  });

  const getNextPage = useCallback(async () => {
    await fetchNextPage();
  }, [fetchNextPage]);

  const onRefresh = useCallback(async () => {
    await refetch();
  }, [refetch]);

  const posts = useMemo(
    () => data?.pages.map((page) => page.posts).flat(),
    [data],
  );

  return (
    <styles.Screen>
      <ReqExpTemplate
        type="experiment"
        sortType={sortType}
        categories={categories}
      >
        <PostsWrap
          posts={posts ?? expPosts}
          type="experiment"
          fetchNextPage={getNextPage}
          isRefreshing={isRefetching}
          onRefresh={onRefresh}
        />
      </ReqExpTemplate>
    </styles.Screen>
  );
};

export default RequestScreen;
