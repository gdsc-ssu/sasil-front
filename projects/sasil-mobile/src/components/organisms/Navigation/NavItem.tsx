import MainIcon from '@/assets/icons/Main';
import RequestIcon from '@/assets/icons/Request';
import ExperimentIcon from '@/assets/icons/Experiment';
import UserIcon from '@/assets/icons/User';
import StyledText from '@/components/atom/StyledText';
import {
  TEXT_STYLE_NAME,
  COLORS,
  NavItemKey,
  NavItemNameKR,
} from '@sasil/common';
import * as styles from './NavItem.style';

// type에 따른 Icon 반환하는 함수
const getIcon = (type: NavItemKey, color: string) => {
  switch (type) {
    case 'main':
      return <MainIcon color={color} />;
    case 'request':
      return <RequestIcon color={color} />;
    case 'experiment':
      return <ExperimentIcon color={color} />;
    case 'user':
      return <UserIcon color={color} />;
    default:
      return <MainIcon color={color} />;
  }
};

export interface NavItemProps {
  type: NavItemKey;
  name: NavItemNameKR;
  isFocused: boolean;
  onPress?: () => void;
}

/**
 * 네비게이션 요소 하나를 그리는 컴포넌트
 */
const NavItem = ({ type, name, isFocused, onPress }: NavItemProps) => {
  const selectedColor = isFocused
    ? COLORS.primary.normal
    : COLORS.grayscale.gray5;

  return (
    <styles.StyledNavItem isFocused={isFocused} onPress={onPress}>
      <styles.IconWrap>{getIcon(type, selectedColor)}</styles.IconWrap>
      <StyledText
        color={selectedColor}
        textStyleName={TEXT_STYLE_NAME.button3}
        style={styles.textWrap}
      >
        {name}
      </StyledText>
    </styles.StyledNavItem>
  );
};

export default NavItem;
