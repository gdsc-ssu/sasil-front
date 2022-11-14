import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';
import { useAtom } from 'jotai';

import {
  getUserByIdAsync,
  getUserWritePostListAsync,
  getUserBookmarkPostListAsync,
  PostType,
  UserType,
} from '@sasil/common';
import { getUserInfoAtom } from '@/logics/store/actions';
import UserPageTemplate from '@/components/templates/UserPageTemplate';
import useInifiniteScroll from '@/logics/hooks/useInfiniteScroll';

type TagType = 'userPosts' | 'bookmarkPosts';

const UserPage: NextPage = () => {
  const router = useRouter();

  const userId = Number(router.query.uid);
  const tabType = (router?.query?.tab || 'userPosts') as TagType;
  const postType = (router?.query?.type || 'request') as PostType;
  const display = 16; // TODO: 몇 개씩 표시될건지 정하기!

  const postsRef = useRef(null);

  const [myInfo] = useAtom(getUserInfoAtom); // 내 정보
  const [userInfo, setUserInfo] = useState({} as UserType); // 유저 정보

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const getInitData = async () => {
      const response = await getUserByIdAsync(userId);

      if (response.isSuccess) {
        setUserInfo(response.result);
      }
    };

    getInitData();
  }, [router.isReady, userId]);

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['user', { userId, tabType, postType }],
    ({ pageParam = 1 }) => {
      if (!router.isReady) {
        return undefined;
      }

      if (tabType === 'userPosts') {
        return getUserWritePostListAsync(userId, postType, pageParam, display);
      }

      return getUserBookmarkPostListAsync(userId, postType, pageParam, display);
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

  const getPosts = async () => {
    if (hasNextPage) {
      await fetchNextPage();
    }
  };

  const onLeftMove = useCallback(() => {
    router.push(
      {
        pathname: `/user/${userId}`,
        query: {
          tab: tabType,
          type: 'request',
        },
      },
      undefined,
      { scroll: false },
    );
  }, [router, tabType, userId]);

  const onRightMove = useCallback(() => {
    router.push(
      {
        pathname: `/user/${userId}`,
        query: {
          tab: tabType,
          type: 'experiment',
        },
      },
      undefined,
      { scroll: false },
    );
  }, [router, tabType, userId]);

  useInifiniteScroll(postsRef, getPosts);

  const postsData = data?.pages
    .map((res) => (res && res.isSuccess ? res.result.list : []))
    .flat();

  const isMyPage = myInfo?.id === userInfo.id;

  return (
    <UserPageTemplate
      userInfo={userInfo}
      tabType={tabType}
      postType={postType}
      posts={postsData}
      postsRef={postsRef}
      onLeftMove={onLeftMove}
      onRightMove={onRightMove}
      isMyPage={isMyPage}
    />
  );
};

export default UserPage;
