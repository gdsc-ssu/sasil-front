import { useCallback, useMemo, useState } from 'react';
import { useListQuery, SortType } from '@sasil/common';

import { reqPosts, categories } from '@/components/dummyData';
import ReqExpTemplate from '@/components/templates/ReqExpTemplate';
import PostsWrap from '@/components/templates/PostsWrap';
import * as styles from './RequestScreen.style';

const RequestScreen = () => {
  const [sort, setSort] = useState<SortType>('popular');

  const { data, fetchNextPage, isRefetching, refetch } = useListQuery(
    'getRequests',
    {
      display: 16,
      sort,
      state: 'all',
    },
  );

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
        type="request"
        sortType={sort}
        categories={categories}
        onSortTypeChange={setSort}
      >
        <PostsWrap
          posts={posts ?? reqPosts}
          type="request"
          fetchNextPage={getNextPage}
          isRefreshing={isRefetching}
          onRefresh={onRefresh}
        />
      </ReqExpTemplate>
    </styles.Screen>
  );
};

export default RequestScreen;
