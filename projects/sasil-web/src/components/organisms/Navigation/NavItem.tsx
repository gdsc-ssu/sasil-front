import {
  TEXT_STYLE_NAME,
  COLORS,
  NavItemKey,
  NavItemNameKR,
} from '@sasil/common';
import MainIcon from '@/assets/icons/Main.svg';
import RequestIcon from '@/assets/icons/Request.svg';
import ExperimentIcon from '@/assets/icons/Experiment.svg';
import UserIcon from '@/assets/icons/User.svg';
import StyledLink from '@/components/atoms/StyledLink';
import * as styles from './NavItem.style';

// type에 따른 Icon
const NAV_ICON = {
  main: <MainIcon />,
  request: <RequestIcon />,
  experiment: <ExperimentIcon />,
  user: <UserIcon />,
} as const;

export interface NavItemProps {
  type: NavItemKey;
  name: NavItemNameKR;
  targetURL: string;
  isFocused: boolean;
}

/**
 * 네비게이션 요소 하나를 그리는 컴포넌트 (반응형)
 */
const NavItem = ({ type, name, targetURL, isFocused }: NavItemProps) => {
  const focusedClassName = isFocused ? 'focused' : undefined;

  const selectedColor = isFocused
    ? COLORS.primary.normal
    : COLORS.grayscale.gray5;

  return (
    <styles.StyledNavItem className={focusedClassName}>
      <StyledLink
        url={targetURL}
        color={selectedColor}
        textStyleName={TEXT_STYLE_NAME.button3}
        className="nav-item"
      >
        <styles.IconWrap>{NAV_ICON[type]}</styles.IconWrap>
        <styles.TextWrap>{name}</styles.TextWrap>
      </StyledLink>
    </styles.StyledNavItem>
  );
};

export default NavItem;
