import { StyleProp, ViewStyle } from 'react-native';

import StyledButton from '@/components/atom/StyledButton';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import * as styles from './CategoryBox.style';

export interface CategoryBoxProps {
  /** 컴포넌트의 전체 색상 (색 지정은 선택 사항이며, 기본 값은 primary 색) */
  isWithBackground?: boolean;
  /** 카테고리 이름 */
  name: string;
  style?: StyleProp<ViewStyle>;
  /** 카테고리 누르면 실행되는 함수 */
  onPress?: () => void;
}

const CategoryBox = ({
  isWithBackground,
  name,
  style,
  onPress,
}: CategoryBoxProps) => {
  const fontColor = isWithBackground
    ? COLORS.grayscale.black
    : COLORS.primary.normal;

  const backgroundColor = isWithBackground
    ? 'rgba(255, 255, 255, 0.6)'
    : COLORS.primary.alpha10;

  return (
    <StyledButton
      text={`#${name}`}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      textStyleName={TEXT_STYLE_NAME.body2R}
      numberOfLines={1}
      style={[styles.styledCategoryBox, style]}
      onPress={onPress}
    />
  );
};

export default CategoryBox;
