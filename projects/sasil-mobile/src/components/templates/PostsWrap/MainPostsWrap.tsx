import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { PostListType } from '@sasil/common';
import PostCard from '@/components/organisms/PostCard';
import PostsWrapTitle, { POSTS_INFO, postsTitleType } from './MainPostsNavCard';
import * as styles from './MainPostsWrap.style';

export interface MainPostsWrapProps {
  posts: PostListType[];
  type: postsTitleType;
}

const MainPostsWrap = ({ posts, type }: MainPostsWrapProps) => {
  const navigation = useNavigation();

  return (
    <styles.Wrap>
      {posts.map((post: PostListType, index: number) => (
        <React.Fragment key={post.id}>
          {index === POSTS_INFO[type].index && (
            <PostsWrapTitle type={type} style={styles.item} />
          )}
          <PostCard
            type={POSTS_INFO[type].postType}
            title={post.title}
            likeCount={post.likeCount}
            thumbnail={post.thumbnail}
            writerObj={post.user}
            style={styles.item}
            onPress={() =>
              navigation.navigate('PostDetail', {
                id: post.id,
                type: POSTS_INFO[type].postType,
              })
            }
          />
        </React.Fragment>
      ))}
    </styles.Wrap>
  );
};

export default MainPostsWrap;
