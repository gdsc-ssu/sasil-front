import React from 'react';
import * as Post from '@/components/organisms/post';
import PostsWrapTitle, { POSTS_TITLE, titleType } from './PostsWrapTitle';
import * as styles from './PostsWrap.styles';

export interface PostsWrapProps {
  // TODO Posts type 넣기
  // TODO posts는 불러올 때 11개만 가져와야함!
  /**  게시물 데이터 */
  posts: any;
  /** 메인에서 노출되는 게시물 종류(답변 안달린 핫한 의뢰, 인기 의뢰, 인기 실험 중 하나) */
  type: titleType;
  className?: string;
}

/**
 * 메인에서 보여지는 게시물을 type에 맞게 관리하는 컴포넌트
 */
const PostsWrap = ({ posts, type, className }: PostsWrapProps) => (
  <styles.Wrap className={className}>
    {posts.map((post: any, index: number) => (
      <React.Fragment key={post.id}>
        {index === POSTS_TITLE[type].index && <PostsWrapTitle type={type} />}
        <Post.MiniCard
          type={POSTS_TITLE[type].postType}
          title={post.title}
          likeCount={post.likeCount}
          thumbnail={post.thumbnail}
          className="mini-card"
        />
      </React.Fragment>
    ))}
  </styles.Wrap>
);
export default PostsWrap;
