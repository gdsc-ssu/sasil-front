import React, { forwardRef } from 'react';
import { CommentType } from '@sasil/common';
import StyledText from '@/components/atoms/StyledText';
import CommentInput from '@/components/molelcules/CommentInput';
import Comment from '@/components/organisms/Comment';
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
}

/** 댓글바와 해당 게시물에 달린 댓글들을 보여주는 컴포넌트 */
const CommentsArea = forwardRef<HTMLDivElement, CommentsAreaProps>(
  (
    { inputValue, comments, onCommentTextChange, addComment, canWrite },
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
          />
        ))}
      </styles.CommentsWrap>
    </styles.Wrap>
  ),
);

export default CommentsArea;
