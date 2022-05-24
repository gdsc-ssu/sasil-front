import Heart from '@/assets/icons/Heart.svg';
import StyledText from '@/components/atoms/StyledText';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import * as styles from './Like.style';

export interface LikeProps {
  /** 컴포넌트의 전체 색상 (색 지정은 선택 사항이며, 기본 값은 primary 색) */
  color?: string;
  /** 좋아요 수 */
  likeCount: number;
}

/**
 * 해당 게시물이 받은 누적 좋아요 수를 나타내는 컴포넌트
 */
const Like = ({ color = COLORS.primary.normal, likeCount }: LikeProps) => (
  <styles.like>
    <styles.iconWrap>
      <Heart fill={color} />
    </styles.iconWrap>
    <styles.labelWrap>
      <StyledText color={color} textStyleName={TEXT_STYLE_NAME.body3}>
        {likeCount}
      </StyledText>
    </styles.labelWrap>
  </styles.like>
);

export default Like;
