import { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getPostsAsync, PostListType } from '@sasil/common';
import { expPosts, reqPosts } from '@/components/dummyData';
import MainTemplate from '@/components/templates/MainTemplate';
import * as styles from './MainScreen.style';

const MainScreen = () => {
  const navigation = useNavigation();

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

  const openLoginModal = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

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
        onProfilePress={openLoginModal}
      />
    </styles.Screen>
  );
};

export default MainScreen;
