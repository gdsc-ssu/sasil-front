import React, { forwardRef } from 'react';
import { useRouter } from 'next/router';
import { Card } from '@/components/organisms/post';
import { PostListType } from '@sasil/common';
import * as styles from './PostsWrap.style';

export interface PostsWrapProps {
  type: 'request' | 'experiment';
  posts: PostListType[] | undefined;
}

const PostsWrap = forwardRef<HTMLDivElement, PostsWrapProps>(
  ({ type, posts }, ref) => (
    <styles.Container ref={ref}>
      {posts?.map((post: PostListType) => (
        <Card
          postUrl={`/post/${type}/${post.id}`}
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
