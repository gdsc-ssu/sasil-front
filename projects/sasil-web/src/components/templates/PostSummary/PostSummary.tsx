import StyledButton from '@/components/atoms/StyledButton';
import * as Post from '@/components/organisms/post';
import PostInfoCard from '@/components/organisms/PostInfoCard';
import { useRouter } from 'next/router';
import * as styles from './PostSummary.style';

export interface PostSummaryProps {
  type: 'request' | 'experiment';
  post: any;
  relativePosts: any;
}

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
