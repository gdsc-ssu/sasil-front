import { useRef } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';

import { categories } from 'src/dummyData';
import { getPostsAsync, SortType } from '@sasil/common';
import ReqExpTemplate from '@/components/templates/ReqExpTemplate';
import useInifiniteScroll from '@/logics/hooks/useInfiniteScroll';

const RequestPage: NextPage = () => {
  const router = useRouter();

  const sortType = (router?.query?.sort || 'recent') as SortType;
  const pageType = 'request';
  const stateType = 'all';
  const display = 2; // TODO: 몇 개씩 표시될건지 정하기!

  const postsRef = useRef(null);

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    'posts', // TODO: Query Key
    ({ pageParam = 1 }) =>
      getPostsAsync(pageType, pageParam, display, sortType, stateType),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isSuccess || lastPage.result.isLast) {
          return undefined;
        }

        return lastPage.result.nextPage;
      },
    },
  );

  const getReqPosts = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  useInifiniteScroll(postsRef, getReqPosts);

  const postsData = data?.pages
    .map((res) => (res.isSuccess ? res.result.posts : []))
    .flat();

  return (
    <ReqExpTemplate
      postsRef={postsRef}
      type={pageType}
      sortType={sortType}
      posts={postsData}
      categories={categories}
    />
  );
};

export default RequestPage;
