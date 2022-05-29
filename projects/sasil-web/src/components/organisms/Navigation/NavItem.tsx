import Link from 'next/link';

import { TEXT_STYLE_NAME, COLORS, NavItemType } from '@sasil/common';
import MainIcon from '@/assets/icons/Main.svg';
import RequestIcon from '@/assets/icons/Request.svg';
import ExperimentIcon from '@/assets/icons/Experiment.svg';
import UserIcon from '@/assets/icons/User.svg';
import StyledText from '@/components/atoms/StyledText';
import * as styles from './NavItem.style';

// type에 따른 Icon
const NAV_ICON = {
  Main: <MainIcon />,
  Request: <RequestIcon />,
  Experiment: <ExperimentIcon />,
  User: <UserIcon />,
} as const;

// TODO: Typescript
export interface NavItemProps {
  type: NavItemType;
  name: any;
  targetURL: any;
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
    <styles.styledNavItem className={focusedClassName}>
      <Link href={targetURL} passHref>
        <styles.LinkBox>
          <styles.iconWrap>{NAV_ICON[type]}</styles.iconWrap>
          <StyledText
            className="nav-name"
            color={selectedColor}
            textStyleName={TEXT_STYLE_NAME.button3}
          >
            {name}
          </StyledText>
        </styles.LinkBox>
      </Link>
    </styles.styledNavItem>
  );
};

export default NavItem;
