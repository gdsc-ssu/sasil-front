/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useRouter } from 'next/router';

import { COLORS } from '@sasil/common';
import PostContent from '@/components/organisms/PostContent';
import PostSummary from '@/components/templates/PostSummary';
import StyledButton from '@/components/atoms/StyledButton';
import NavBar from '@/components/templates/NavBar';
import StyledText from '@/components/atoms/StyledText';
import { CommentsAreaWrapped } from '@/components/templates/CommentsArea';
import InterestsWrap, {
  LikeInfoType,
  BookmarkInfoType,
} from '@/components/organisms/InterestsWrap';
import LeftIcon from '@/assets/icons/Left.svg';
import * as Post from '@/components/organisms/post';
import * as styles from './PostDetailTemplate.style';
import { PostSummaryProps } from '../PostSummary/PostSummary';

export interface PostDetailTemplateProps extends PostSummaryProps {
  /** 좋아요 및 북마크 버튼을 눌렀을 시 컨트롤 함수 */
  likeInfo: LikeInfoType;
  bookmarkInfo: BookmarkInfoType;
  handleLike?: () => void;
  handleBookmark?: () => void;
}

/** 게시물 상세 페이지를 위한 템플릿 컴포넌트  */
const PostDetailTemplate = ({
  type,
  post,
  relativePosts,
  likeInfo,
  bookmarkInfo,
  handleLike,
  handleBookmark,
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
            thumbnail={post.thumbnail ?? ''}
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
                  likeInfo={likeInfo}
                  bookmarkInfo={bookmarkInfo}
                  handleLike={handleLike}
                  handleBookmark={handleBookmark}
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
            <CommentsAreaWrapped />
          </styles.MainContentWrap>
        </styles.TemplateWrap>
      </NavBar>
    </styles.Wrap>
  );
};

export default PostDetailTemplate;
