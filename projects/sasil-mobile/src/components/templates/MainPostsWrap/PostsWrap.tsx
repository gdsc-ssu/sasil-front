import React from 'react';
import PostCard from '@/components/organisms/PostCard';
import PostsWrapTitle, {
  POSTS_TITLE,
  postsWrapTitleType,
} from './PostsWrapTitle';
import * as styles from './PostsWrap.style';

export interface MainPostWrapProps {
  posts: any;
  type: postsWrapTitleType;
}

const MainPostsWrap = ({ posts, type }: MainPostWrapProps) => (
  <styles.Wrap>
    {posts.map((post: any, index: number) => (
      <React.Fragment key={post.id}>
        {index === POSTS_TITLE[type].index && (
          <PostsWrapTitle type={type} style={styles.Item} />
        )}
        <PostCard
          type={POSTS_TITLE[type].postType}
          title={post.title}
          likeCount={post.likeCount}
          thumbnail={post.thumbnail}
          writerObj={post.user}
          style={styles.Item}
        />
      </React.Fragment>
    ))}
  </styles.Wrap>
);

export default MainPostsWrap;
