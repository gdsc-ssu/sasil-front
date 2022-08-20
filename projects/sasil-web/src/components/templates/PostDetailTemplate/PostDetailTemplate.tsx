/* eslint-disable react/self-closing-comp */
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { COLORS, RelativePostType } from '@sasil/common';
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
import MenuCircleIcon from '@/assets/icons/MenuCircle.svg';
import DeleteIcon from '@/assets/icons/Delete.svg';
import ReportIcon from '@/assets/icons/Danger.svg';
import EditIcon from '@/assets/icons/Edit.svg';
import * as Post from '@/components/organisms/post';
import DropdownMenu, {
  DropdownMenuItem,
} from '@/components/molelcules/DropdownMenu';
import * as styles from './PostDetailTemplate.style';
import { PostSummaryProps } from '../PostSummary/PostSummary';

export interface PostDetailTemplateProps extends PostSummaryProps {
  /** 좋아요 및 북마크 버튼을 눌렀을 시 컨트롤 함수 */
  likeInfo: LikeInfoType;
  bookmarkInfo: BookmarkInfoType;
  handleLike?: () => void;
  handleBookmark?: () => void;
  /** 게시글 메뉴 노출 정보 객체  */
  menuDisplayInfo: {
    display: boolean;
    top: number;
  };
  /** 게시글 메뉴 노출 컨트롤 함수 */
  onMenuDisplayToggle: (top?: number) => void;
  /** 게시물 작성자 여부 */
  isWriter: boolean;
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
  menuDisplayInfo,
  onMenuDisplayToggle,
  isWriter,
}: PostDetailTemplateProps) => {
  const router = useRouter();
  const goBack = () => router.back();
  const goExpWrite = () => router.push(`/write/experiment?reqId=${post.id}`);

  const isExp = type === 'experiment';
  const relPostType = isExp ? 'request' : 'experiment';

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  return (
    <styles.Wrap>
      <NavBar focusType="main" className="post-navbar">
        <styles.MobileNavBar isExp={isExp} ref={mobileMenuRef}>
          <styles.LeftIconWrap onClick={goBack}>
            <LeftIcon
              color={isExp ? COLORS.grayscale.white : COLORS.grayscale.black}
            />
          </styles.LeftIconWrap>
          <styles.MenuWrap>
            {!isExp && (
              <StyledButton
                isMini
                text="실험하기"
                textStyleName="button2B"
                className="exp-btn"
                onClick={goExpWrite}
              />
            )}
            <styles.MenuIconWrap
              onClick={() =>
                onMenuDisplayToggle?.(
                  (mobileMenuRef?.current?.offsetTop ?? 0) + 42,
                )
              }
            >
              <MenuCircleIcon
                color={isExp ? COLORS.grayscale.white : COLORS.grayscale.black}
              />
            </styles.MenuIconWrap>
          </styles.MenuWrap>

          <DropdownMenu
            menuDisplayInfo={menuDisplayInfo}
            onMenuDisplayToggle={onMenuDisplayToggle}
            className="mobile-post-menu"
          >
            {isWriter && (
              <>
                <DropdownMenuItem
                  icon={<EditIcon width={19} />}
                  text="수정"
                  onMenuClick={() => {}}
                />
                <DropdownMenuItem
                  icon={<DeleteIcon width={19} />}
                  text="삭제"
                  onMenuClick={() => {}}
                />
              </>
            )}
            <DropdownMenuItem
              icon={<ReportIcon width={19} />}
              text="신고"
              onMenuClick={() => {}}
            />
          </DropdownMenu>
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
              <PostContent
                post={post}
                menuDisplayInfo={menuDisplayInfo}
                onMenuDisplayToggle={onMenuDisplayToggle}
                isWriter={isWriter}
              />
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
                  {relativePosts[0] &&
                    relativePosts.map((relPost: RelativePostType) => (
                      <Post.MiniCard
                        key={relPost.id}
                        postUrl={`/post/${relPostType}/${relPost.id}`}
                        type={relPostType}
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
