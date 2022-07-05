import TextInput, { TextInputProps } from '@/components/atoms/TextInput';
import SendIcon from '@/assets/icons/Send.svg';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import * as styles from './CommentInput.style';

export interface CommentInputProps
  extends Pick<TextInputProps, 'value' | 'onTextChange'> {}

/** 게시물에 댓글을 입력할 수 있는 댓글바를 생성하는 컴포넌트  */
const CommentInput = ({ value, onTextChange }: CommentInputProps) => (
  <styles.Wrap>
    <styles.IconWrap>
      <SendIcon fill={COLORS.primary.normal} />
    </styles.IconWrap>
    <TextInput
      value={value}
      placeholder="댓글을 입력하세요"
      textStyleName={TEXT_STYLE_NAME.body2R}
      onTextChange={onTextChange}
    />
  </styles.Wrap>
);

export default CommentInput;
