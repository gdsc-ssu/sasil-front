import React, { useRef } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';

import {
  getSearchPostsAsync,
  PostType,
  SearchType,
  SortType,
} from '@sasil/common';
import SearchTemplate from '@/components/templates/SearchTemplate';
import useInifiniteScroll from '@/logics/hooks/useInfiniteScroll';

const Search: NextPage = () => {
  const router = useRouter();
  const { keyword, stype, ptype, sort } = router.query;

  const postType = (ptype || 'request') as PostType;
  const searchType = (stype || 'query') as SearchType;
  const sortType = (sort || 'popular') as SortType;
  const display = 16;

  const postsRef = useRef(null);

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['search', { postType, searchType, sortType, keyword }],
    ({ pageParam = 1 }) => {
      if (!router.isReady || !keyword) {
        return undefined;
      }

      return getSearchPostsAsync(
        postType,
        searchType,
        keyword as string,
        pageParam,
        display,
        sortType,
      );
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

  const getSearchPosts = async () => {
    if (hasNextPage) {
      await fetchNextPage();
    }
  };

  useInifiniteScroll(postsRef, getSearchPosts);

  const postsData = data?.pages
    .map((res) => (res?.isSuccess ? res.result.list : []))
    .flat();

  return (
    <SearchTemplate
      keyword={keyword as string | undefined}
      postsRef={postsRef}
      searchType={searchType}
      postType={postType}
      posts={postsData}
    />
  );
};

export default Search;
