import StyledButton from '@/components/atoms/StyledButton';
import * as Post from '@/components/organisms/post';
import PostInfoCard from '@/components/organisms/PostInfoCard';
import {
  AnswerExpPostType,
  TargetReqPostType,
  PostDetailType,
} from '@sasil/common';
import { useRouter } from 'next/router';
import * as styles from './PostSummary.style';

export interface PostSummaryProps {
  /** 게시물의 종류로, 의뢰 혹은 실험 중 하나. */
  type: 'request' | 'experiment';
  /** 게시물 객체 */
  post: PostDetailType;
  /** 게시물 type이 실험이라면 해당 게시물이 응답한 의뢰 게시물. 의뢰라면 해당 게시물에 응답한 실험 게시물 리스트. */
  relativePosts: AnswerExpPostType[];
}

/** 게시물 상세 페이지 사이드에 띄워지는 게시물 요약 컴포넌트 */
const PostSummary = ({ type, post, relativePosts }: PostSummaryProps) => {
  const router = useRouter();
  const goExpWrite = () => router.push(`/write/experiment?reqId=${post.id}`);

  return (
    <styles.Wrap>
      <PostInfoCard post={post} />
      {type === 'request' && (
        <StyledButton
          text="실험하기"
          textStyleName="button2B"
          className="exp-btn"
          onClick={goExpWrite}
        />
      )}
      <styles.PostCardsWrap>
        {relativePosts.map((relPost: any) => (
          <Post.MiniCard
            key={relPost.id}
            type={type === 'experiment' ? 'request' : 'experiment'}
            thumbnail={relPost.thumbnail}
            title={relPost.title}
            likeCount={relPost.likeCount}
            className={`postcard ${type === 'experiment' && 'req'}`}
          />
        ))}
      </styles.PostCardsWrap>
    </styles.Wrap>
  );
};

export default PostSummary;
