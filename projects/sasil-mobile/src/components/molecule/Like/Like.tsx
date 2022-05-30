import Heart from '@/assets/icons/Heart';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import React from 'react';
import StyledText from '@/components/atom/StyledText';
import * as styles from './Like.style';

export interface LikeProps {
  /** 컴포넌트의 전체 색 (색 지정은 선택 사항이며, 기본 값은 primary 색) */
  color?: string;
  /** 좋아요 수 */
  likeCount: number;
}

/**
 * 해당 게시물이 받은 누적 좋아요 수를 나타내는 컴포넌트
 */
const Like = ({ color = COLORS.primary.normal, likeCount }: LikeProps) => (
  <styles.LikeWrap>
    <Heart color={color} style={styles.IconWrap} />
    <StyledText
      color={color}
      textStyleName={TEXT_STYLE_NAME.body3}
      style={styles.LabelWrap}
    >
      {likeCount}
    </StyledText>
  </styles.LikeWrap>
);

export default Like;
