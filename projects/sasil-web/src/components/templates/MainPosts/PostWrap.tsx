import * as Post from '@/components/organisms/post';
import PostWrapTitle, { POSTS_TITLE, titleType } from './PostWrapTitle';
import * as styles from './PostWrap.styles';

export interface PostWrapProps {
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
const PostWrap = ({ posts, type, className }: PostWrapProps) => (
  <styles.Wrap className={className}>
    {posts.slice().map((post: any, index: number) =>
      index === POSTS_TITLE[type].index ? (
        <>
          <PostWrapTitle type={type} />
          <Post.MiniCard
            type={POSTS_TITLE[type].postType}
            title={post.title}
            likeCount={post.likeCount}
            thumbnail={post.thumbnail}
            className="mini-card"
          />
        </>
      ) : (
        <Post.MiniCard
          type={POSTS_TITLE[type].postType}
          title={post.title}
          likeCount={post.likeCount}
          thumbnail={post.thumbnail}
          className="mini-card"
        />
      ),
    )}
  </styles.Wrap>
);
export default PostWrap;
