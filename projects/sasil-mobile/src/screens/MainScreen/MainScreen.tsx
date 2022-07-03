import { useEffect, useState } from 'react';
import { getPostsAsync, PostInfoType } from '@sasil/common';
import { expPosts, reqPosts } from '@/components/dummyData';
import MainTemplate from '@/components/templates/MainTemplate';
import * as styles from './MainScreen.style';

const MainScreen = () => {
  const [posts, setPosts] = useState<{
    hotReqPosts: PostInfoType[];
    popExpPosts: PostInfoType[];
    popReqPosts: PostInfoType[];
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
        hotReqPosts: hotReq.isSuccess ? hotReq.result.posts : [],
        popExpPosts: popExp.isSuccess ? popExp.result.posts : [],
        popReqPosts: popReq.isSuccess ? popReq.result.posts : [],
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
