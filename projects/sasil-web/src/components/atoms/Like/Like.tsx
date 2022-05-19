import Heart from '@/assets/icons/Heart.svg';
import styled from '@emotion/styled';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import StyledText from '../StyledText';

const LikeWrap = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const LabelWrap = styled.div({
  // width: 20,
  height: 16,
});

const IconWrap = styled.div({
  width: 16,
  height: 16,
});

export interface LikeProps {
  color?: string;
  likeCount: number;
}

/**
 * 해당 게시물이 받은 누적 좋아요 수를 나타내는 컴포넌트
 * @param color : 컴포넌트의 전체 색 지정 (색 지정은 선택 사항이며, 기본 값은 primary 색)
 * @param likeCount : 좋아요 수
 */
const Like = ({ color, likeCount }: LikeProps) => (
  <LikeWrap>
    <IconWrap>
      <Heart fill={color || COLORS.primary.normal} />
    </IconWrap>
    <LabelWrap>
      <StyledText
        color={color || COLORS.primary.normal}
        textStyleName={TEXT_STYLE_NAME.body3}
      >
        {likeCount}
      </StyledText>
    </LabelWrap>
  </LikeWrap>
);

export default Like;
