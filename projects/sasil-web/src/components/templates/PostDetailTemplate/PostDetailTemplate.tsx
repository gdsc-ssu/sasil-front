/* eslint-disable react/self-closing-comp */
import { useRouter } from 'next/router';
import { COLORS } from '@sasil/common';
import PostContent from '@/components/organisms/PostContent';
import PostSummary from '@/components/templates/PostSummary';
import StyledButton from '@/components/atoms/StyledButton';
import NavBar from '@/components/templates/NavBar';
import StyledText from '@/components/atoms/StyledText';
import CommentsArea from '@/components/templates/CommentsArea';
import InterestsWrap from '@/components/organisms/InterestsWrap';
import LeftIcon from '@/assets/icons/Left.svg';
import * as Post from '@/components/organisms/post';
import * as styles from './PostDetailTemplate.style';

export interface PostDetailTemplateProps {
  /** 게시물의 종류로, 의뢰 혹은 실험 중 하나. */
  type: 'request' | 'experiment';
  /** 게시물 객체 */
  post: any;
  /** 게시물 type이 실험이라면 해당 게시물이 응답한 의뢰 게시물. 의뢰라면 해당 게시물에 응답한 실험 게시물 리스트. */
  relativePosts: any;
  /** 댓글 입력 값 */
  commentInputValue: string;
  /** 댓글 입력 변화 컨트롤 함수 */
  onCommentTextChange: (text: string) => void;
  /** 좋아요 및 게시물 버튼을 눌렀을 시 컨트롤 함수 */
  onInterestPress: (buttonName: string) => void;
}

/** 게시물 상세 페이지를 위한 템플릿 컴포넌트  */
const PostDetailTemplate = ({
  type,
  post,
  relativePosts,
  commentInputValue,
  onCommentTextChange,
  onInterestPress,
}: PostDetailTemplateProps) => {
  const router = useRouter();
  const goBack = () => router.back();
  const goExpWrite = () => router.push(`/write/experiment?reqId=${post.id}`);
  const isExp = type === 'experiment';
  return (
    <styles.Wrap>
      <NavBar focusType="main" className="post-navbar">
        <styles.MobileNavBar isExp={isExp}>
          <styles.IconWrap onClick={goBack}>
            <LeftIcon
              color={isExp ? COLORS.grayscale.white : COLORS.grayscale.black}
            />
          </styles.IconWrap>
          {!isExp && (
            <StyledButton
              isMini
              text="실험하기"
              textStyleName="button2B"
              className="exp-btn"
              onClick={goExpWrite}
            />
          )}
        </styles.MobileNavBar>
        {isExp && (
          <styles.ExperimentThumbnail
            thumbnail={post.thumbnail}
          ></styles.ExperimentThumbnail>
        )}
        <styles.TemplateWrap>
          <styles.SummaryWrap>
            <PostSummary
              type={type}
              post={post}
              relativePosts={relativePosts}
            />
          </styles.SummaryWrap>
          <styles.MainContentWrap>
            <styles.Top>
              <PostContent post={post} />
              <styles.InterestBoxWrap>
                <InterestsWrap
                  likeCount={post.likeCount}
                  bookmarkCount={post.bookmarkCount}
                  liked={post.liked}
                  bookmarked={post.bookmarked}
                  onInterestPress={onInterestPress}
                />
              </styles.InterestBoxWrap>
            </styles.Top>
            <styles.Bottom>
              <StyledText textStyleName="subtitle3" className="mobile-label">
                {isExp ? '관련 의뢰' : '관련 실험'}
              </StyledText>
              <styles.ScrollArea>
                <styles.PostCardsWrap>
                  {relativePosts.map((relPost: any) => (
                    <Post.MiniCard
                      key={relPost.id}
                      type={isExp ? 'request' : 'experiment'}
                      thumbnail={relPost.thumbnail}
                      title={relPost.title}
                      likeCount={relPost.likeCount}
                      className="postcard"
                    />
                  ))}
                </styles.PostCardsWrap>
              </styles.ScrollArea>
            </styles.Bottom>
            <CommentsArea
              comments={post.comments}
              inputValue={commentInputValue}
              onCommentTextChange={onCommentTextChange}
            />
          </styles.MainContentWrap>
        </styles.TemplateWrap>
      </NavBar>
    </styles.Wrap>
  );
};

export default PostDetailTemplate;
