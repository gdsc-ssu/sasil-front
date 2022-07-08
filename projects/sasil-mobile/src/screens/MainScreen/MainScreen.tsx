import { useEffect, useState } from 'react';
import { getPostsAsync, PostListType } from '@sasil/common';
import { expPosts, reqPosts } from '@/components/dummyData';
import MainTemplate from '@/components/templates/MainTemplate';
import * as styles from './MainScreen.style';

const MainScreen = () => {
  const [posts, setPosts] = useState<{
    hotReqPosts: PostListType[];
    popExpPosts: PostListType[];
    popReqPosts: PostListType[];
  }>({
    hotReqPosts: [],
    popExpPosts: [],
    popReqPosts: [],
  });

  useEffect(() => {
    async function getInitialData() {
      const [hotReq, popExp, popReq] = await Promise.all([
        getPostsAsync('request', 1, 11, 'popular', 'wait'),
        getPostsAsync('experiment', 1, 11, 'popular'),
        getPostsAsync('request', 1, 11, 'popular', 'all'),
      ]);

      setPosts({
        hotReqPosts: hotReq.isSuccess ? hotReq.result.list : [],
        popExpPosts: popExp.isSuccess ? popExp.result.list : [],
        popReqPosts: popReq.isSuccess ? popReq.result.list : [],
      });
    }

    getInitialData();
  }, []);

  return (
    <styles.Screen>
      <MainTemplate
        hotReqPosts={
          posts.hotReqPosts.length > 0 ? posts.hotReqPosts : reqPosts
        }
        popExpPosts={
          posts.popExpPosts.length > 0 ? posts.popExpPosts : expPosts
        }
        popReqPosts={
          posts.popReqPosts.length > 0 ? posts.popReqPosts : reqPosts
        }
      />
    </styles.Screen>
  );
};

export default MainScreen;
