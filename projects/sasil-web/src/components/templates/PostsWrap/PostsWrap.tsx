import React, { forwardRef } from 'react';

import { Card } from '@/components/organisms/post';
import { PostInfoType } from '@sasil/common';
import * as styles from './PostsWrap.style';

export interface PostsWrapProps {
  posts: PostInfoType[] | undefined;
}

const PostsWrap = forwardRef<HTMLDivElement, PostsWrapProps>(
  ({ posts }, ref) => (
    <styles.Container ref={ref}>
      {posts?.map((post: any) => (
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
