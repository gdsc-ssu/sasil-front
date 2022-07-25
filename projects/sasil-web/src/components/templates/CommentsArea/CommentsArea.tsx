import React, { forwardRef } from 'react';
import { COLORS, CommentType, TEXT_STYLE_NAME } from '@sasil/common';
import StyledText from '@/components/atoms/StyledText';
import DropdownMenu from '@/components/molelcules/DropdownMenu';
import CommentInput from '@/components/molelcules/CommentInput';
import Comment from '@/components/organisms/Comment';
import DeleteIcon from '@/assets/icons/Delete.svg';
import ReportIcon from '@/assets/icons/Danger.svg';
import * as styles from './CommentsArea.style';

export interface CommentsAreaProps {
  /** 댓글 입력 값 */
  inputValue: string;
  /** 댓글 리스트 객체 */
  comments: CommentType[] | undefined;
  /** 댓글 변화 컨트롤 함수 */
  onCommentTextChange?: (text: string) => void;
  /** 댓글 추가 함수 */
  addComment?: () => void;
  /** 댓글 작성 가능 여부 */
  canWrite: boolean;
  /** 댓글 메뉴 노출 정보 객체  */
  menuDisplayInfo: { display: boolean; top: number; left: number };
  /** 댓글 메뉴 노출 컨트롤 함수 */
  onMenuDisplayChange?: (top?: number, left?: number) => void;
  /** 댓글 삭제 함수 */
  onDeleteComment?: () => void;
  /** 댓글 신고 함수 */
  onReportComment?: () => void;
}

/** 댓글바와 해당 게시물에 달린 댓글들을 보여주는 컴포넌트 */
const CommentsArea = forwardRef<HTMLDivElement, CommentsAreaProps>(
  (
    {
      inputValue,
      comments,
      onCommentTextChange,
      addComment,
      canWrite,
      menuDisplayInfo,
      onMenuDisplayChange,
      onDeleteComment,
      onReportComment,
    },
    ref,
  ) => (
    <styles.Wrap>
      <StyledText textStyleName="subtitle3" className="mobile-label">
        댓글
      </StyledText>
      <styles.CommentInputWrap>
        <CommentInput
          value={inputValue}
          onTextChange={onCommentTextChange}
          addComment={addComment}
          canWrite={canWrite}
        />
      </styles.CommentInputWrap>
      <styles.CommentsWrap ref={ref}>
        {comments?.map((comment: CommentType) => (
          <Comment
            key={comment.id}
            writerObj={comment.user}
            content={comment.content}
            onMenuDisplayChange={onMenuDisplayChange}
          />
        ))}
      </styles.CommentsWrap>
      <DropdownMenu
        menuDisplayInfo={menuDisplayInfo}
        onMenuDisplayChange={onMenuDisplayChange}
      >
        <styles.MenuItem onClick={onDeleteComment}>
          <DeleteIcon width={19} />
          <StyledText
            color={COLORS.grayscale.gray7}
            textStyleName={TEXT_STYLE_NAME.button2R}
            className="menu-text"
          >
            삭제
          </StyledText>
        </styles.MenuItem>
        <styles.MenuItem onClick={onReportComment}>
          <ReportIcon width={19} />
          <StyledText
            color={COLORS.grayscale.gray7}
            textStyleName={TEXT_STYLE_NAME.button2R}
            className="menu-text"
          >
            신고
          </StyledText>
        </styles.MenuItem>
      </DropdownMenu>
    </styles.Wrap>
  ),
);

export default CommentsArea;
