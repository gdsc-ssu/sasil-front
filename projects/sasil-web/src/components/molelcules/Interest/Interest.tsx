import StyledText from '@/components/atoms/StyledText';
import { COLORS, TextStyleName, TEXT_STYLE_NAME } from '@sasil/common';

import FillHeartIcon from '@/assets/icons/FillHeart.svg';
import FillBookmarkIcon from '@/assets/icons/FillBookmark.svg';
import HeartIcon from '@/assets/icons/Heart.svg';
import BookmarkIcon from '@/assets/icons/Bookmark.svg';

import * as styles from './Interest.style';

// 조건에 맞는 아이콘을 반환하는 함수
const getIcon = (
  type: 'like' | 'bookmark',
  pressed: boolean,
  color: string,
) => {
  const ICONS = {
    like: {
      normalIcon: <HeartIcon />,
      pressedIcon: <FillHeartIcon fill={color} />,
    },
    bookmark: {
      normalIcon: <BookmarkIcon fill={color} />,
      pressedIcon: <FillBookmarkIcon fill={color} />,
    },
  };
  return ICONS[type][`${pressed ? 'pressed' : 'normal'}Icon`];
};

export interface InterestProps {
  /** Interest 종류로, 좋아요와 북마크 중 하나. */
  type: 'like' | 'bookmark';
  /** 좋아요 혹은 북마크 수 */
  count: number;
  /** 사용자가 좋아요 혹은 북마크를 눌렀는지에 대한 여부 */
  pressed?: boolean;
  /** 컴포넌트의 전체 색상 (색 지정은 선택 사항이며, 기본 값은 primary 색) */
  color?: string;
  /** 아이콘 크기 */
  size?: number;
  /** count 글자 스타일 이름 */
  textStyleName?: TextStyleName;
  className?: string;
}

/**
 * 해당 게시물이 받은 누적 좋아요 수를 나타내는 컴포넌트
 */
const Interest = ({
  type,
  count,
  pressed = true,
  color = COLORS.primary.normal,
  size = 16,
  textStyleName = TEXT_STYLE_NAME.body3,
  className,
}: InterestProps) => (
  <styles.InterestWrap className={className}>
    <styles.IconWrap size={size}>
      {getIcon(type, pressed, color)}
    </styles.IconWrap>
    <StyledText color={color} textStyleName={textStyleName}>
      {count}
    </StyledText>
  </styles.InterestWrap>
);

export default Interest;
