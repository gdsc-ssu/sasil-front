import React, { forwardRef } from 'react';

import { Card } from '@/components/organisms/post';
import { PostListType } from '@sasil/common';
import * as styles from './PostsWrap.style';

export interface PostsWrapProps {
  posts: PostListType[] | undefined;
}

const PostsWrap = forwardRef<HTMLDivElement, PostsWrapProps>(
  ({ posts }, ref) => (
    <styles.Container ref={ref}>
      {posts?.map((post: PostListType) => (
        <Card
          key={post.id}
          title={post.title}
          likeCount={post.likeCount}
          thumbnail={post.thumbnail}
          categories={post.categories}
        />
      ))}
    </styles.Container>
  ),
);

export default PostsWrap;
