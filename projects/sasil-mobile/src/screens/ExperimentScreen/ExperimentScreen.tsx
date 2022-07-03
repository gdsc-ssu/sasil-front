import { useCallback, useMemo, useState } from 'react';
import { useListQuery, SortType } from '@sasil/common';

import { expPosts, categories } from '@/components/dummyData';
import ReqExpTemplate from '@/components/templates/ReqExpTemplate';
import PostsWrap from '@/components/templates/PostsWrap';
import * as styles from './ExperimentScreen.style';

const RequestScreen = () => {
  const [sort, setSort] = useState<SortType>('recent');

  const { data, fetchNextPage, refetch, isRefetching } = useListQuery(
    'getExperiments',
    {
      display: 16,
      sort,
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
        type="experiment"
        sortType={sort}
        categories={categories}
        onSortTypeChange={setSort}
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
