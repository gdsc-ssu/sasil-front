import { CommentType } from '@sasil/common';
import StyledText from '@/components/atoms/StyledText';
import CommentInput from '@/components/molelcules/CommentInput';
import Comment from '@/components/organisms/Comment';
import * as styles from './CommentsArea.style';

export interface CommentsAreaProps {
  /** 댓글 입력 값 */
  inputValue: string;
  /** 댓글 리스트 객체 */
  comments: CommentType[];
  /** 댓글 변화 컨트롤 함수 */
  onCommentTextChange: (text: string) => void;
}

/** 댓글바와 해당 게시물에 달린 댓글들을 보여주는 컴포넌트 */
const CommentsArea = ({
  inputValue,
  comments,
  onCommentTextChange,
}: CommentsAreaProps) => (
  <styles.Wrap>
    <StyledText textStyleName="subtitle3" className="mobile-label">
      댓글
    </StyledText>
    <styles.CommentInputWrap>
      <CommentInput value={inputValue} onTextChange={onCommentTextChange} />
    </styles.CommentInputWrap>
    <styles.CommentsWrap>
      {comments?.map((comment: CommentType) => (
        <Comment
          key={comment.id}
          writerObj={comment.user}
          content={comment.content}
        />
      ))}
    </styles.CommentsWrap>
  </styles.Wrap>
);

export default CommentsArea;
