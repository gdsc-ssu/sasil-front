import React, { useRef } from 'react';
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
  const display = 16; // TODO: 몇 개씩 표시될건지 정하기!

  const postsRef = useRef(null);

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['posts', { pageType, sortType }],
    ({ pageParam = 1 }) => {
      if (!router.isReady) {
        return undefined;
      }

      return getPostsAsync(pageType, pageParam, display, sortType, stateType);
    },
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage || !lastPage.isSuccess || lastPage.result.isLast) {
          return undefined;
        }

        return lastPage.result.nextPage;
      },
      staleTime: 300000, // TODO: 일단 cache-time의 default 값인 5분과 동일하게 맞춤
    },
  );

  const getReqPosts = async () => {
    if (hasNextPage) {
      await fetchNextPage();
    }
  };

  useInifiniteScroll(postsRef, getReqPosts);

  const postsData = data?.pages
    .map((res) => (res?.isSuccess ? res.result.list : []))
    .flat();

  return (
    <ReqExpTemplate
      postsRef={postsRef}
      postType={pageType}
      sortType={sortType}
      posts={postsData}
      categories={categories}
    />
  );
};

export default RequestPage;
