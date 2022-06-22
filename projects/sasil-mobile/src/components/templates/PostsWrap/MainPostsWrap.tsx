import React from 'react';
import PostCard from '@/components/organisms/PostCard';
import PostsWrapTitle, {
  POSTS_TITLE,
  postsTitleType,
} from './MainPostsNavCard';
import * as styles from './MainPostsWrap.style';

export interface MainPostsWrapProps {
  posts: any;
  type: postsTitleType;
}

const MainPostsWrap = ({ posts, type }: MainPostsWrapProps) => (
  <styles.Wrap>
    {posts.map((post: any, index: number) => (
      <React.Fragment key={post.id}>
        {index === POSTS_TITLE[type].index && (
          <PostsWrapTitle type={type} style={styles.item} />
        )}
        <PostCard
          type={POSTS_TITLE[type].postType}
          title={post.title}
          likeCount={post.likeCount}
          thumbnail={post.thumbnail}
          writerObj={post.user}
          style={styles.item}
        />
      </React.Fragment>
    ))}
  </styles.Wrap>
);

export default MainPostsWrap;
