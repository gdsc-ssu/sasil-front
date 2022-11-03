import React, { forwardRef } from 'react';
import StyledText from '@/components/atoms/StyledText';
import { Card } from '@/components/organisms/post';
import { COLORS, PostListType, TEXT_STYLE_NAME } from '@sasil/common';
import * as styles from './PostsWrap.style';

export interface PostsWrapProps {
  /** 게시물 타입  */
  postType: 'request' | 'experiment';
  /** 게시물 리스트 */
  posts: PostListType[] | undefined;
  /** 보여줄 게시물이 없을 때 노출할 문구 */
  placeholder?: string;
}

const PostsWrap = forwardRef<HTMLDivElement, PostsWrapProps>(
  ({ postType, posts, placeholder = '게시물이 없습니다' }, ref) => (
    <styles.Container ref={ref}>
      {posts?.length ? (
        posts.map((post: PostListType) => (
          <Card
            postUrl={`/post/${postType}/${post.id}`}
            key={post.id}
            title={post.title}
            likeCount={post.likeCount}
            thumbnail={post.thumbnail}
            categories={post.categories}
          />
        ))
      ) : (
        <StyledText
          textStyleName={TEXT_STYLE_NAME.subtitle2R}
          color={COLORS.grayscale.gray6}
          className="placeholder"
        >
          {placeholder}
        </StyledText>
      )}
    </styles.Container>
  ),
);

export default PostsWrap;
