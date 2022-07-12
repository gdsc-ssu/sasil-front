import StyledText from '@/components/atoms/StyledText';
import WriterInfo from '@/components/molelcules/WriterInfo';
import { COLORS, TEXT_STYLE_NAME, WriterType } from '@sasil/common';
import MenuCircleIcon from '@/assets/icons/MenuCircle.svg';
import * as styles from './Comment.style';

export interface CommentProps {
  writerObj?: WriterType;
  content: string;
}

/** 게시물에 달린 댓글을 나타내는 컴포넌트 */
const Comment = ({ writerObj, content }: CommentProps) => (
  <styles.CommentWrap>
    <styles.Top>
      <WriterInfo
        writerObj={writerObj}
        textColor={COLORS.grayscale.gray7}
        textStyleName={TEXT_STYLE_NAME.body2R}
        profileSize={20}
      />
      <MenuCircleIcon fill={COLORS.grayscale.gray6} />
    </styles.Top>

    <StyledText
      color={COLORS.grayscale.gray8}
      textStyleName={TEXT_STYLE_NAME.body2R}
    >
      {content}
    </StyledText>
  </styles.CommentWrap>
);

export default Comment;
