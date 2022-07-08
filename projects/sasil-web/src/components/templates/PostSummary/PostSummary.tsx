import { useRouter } from 'next/router';

import { RelativePostType, PostDetailType } from '@sasil/common';
import StyledButton from '@/components/atoms/StyledButton';
import * as Post from '@/components/organisms/post';
import PostInfoCard from '@/components/organisms/PostInfoCard';
import * as styles from './PostSummary.style';

export interface PostSummaryProps {
  /** 게시물의 종류로, 의뢰 혹은 실험 중 하나. */
  type: 'request' | 'experiment';
  /** 게시물 객체 */
  post: PostDetailType;
  /** 게시물 type이 실험이라면 해당 게시물이 응답한 의뢰 게시물. 의뢰라면 해당 게시물에 응답한 실험 게시물 리스트. */
  relativePosts: RelativePostType[];
}

/** 게시물 상세 페이지 사이드에 띄워지는 게시물 요약 컴포넌트 */
const PostSummary = ({ type, post, relativePosts }: PostSummaryProps) => {
  const router = useRouter();
  const goExpWrite = () => router.push(`/write/experiment?reqId=${post.id}`);

  const isExp = type === 'experiment';
  const relPostType = isExp ? 'request' : 'experiment';

  return (
    <styles.Wrap>
      <PostInfoCard post={post} />
      {!isExp && (
        <StyledButton
          text="실험하기"
          textStyleName="button2B"
          className="exp-btn"
          onClick={goExpWrite}
        />
      )}
      <styles.PostCardsWrap>
        {relativePosts[0] &&
          relativePosts.map((relPost: RelativePostType) => (
            <Post.MiniCard
              key={relPost.id}
              postUrl={`/post/${relPostType}/${relPost.id}`}
              type={relPostType}
              thumbnail={relPost.thumbnail}
              title={relPost.title}
              likeCount={relPost.likeCount}
              className={`postcard ${isExp && 'req'}`}
            />
          ))}
      </styles.PostCardsWrap>
    </styles.Wrap>
  );
};

export default PostSummary;
