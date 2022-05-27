import Link from 'next/link';

import MainIcon from '@/assets/icons/Main.svg';
import RequestIcon from '@/assets/icons/Request.svg';
import ExperimentIcon from '@/assets/icons/Experiment.svg';
import UserIcon from '@/assets/icons/User.svg';
import StyledText from '@/components/atoms/StyledText';
import { TEXT_STYLE_NAME, COLORS } from '@sasil/common';
import { useRouter } from 'next/router';
import * as styles from './NavItem.style';

// type에 따른 naming, icon, route 값을 갖는 객체
const NAV_INFO = {
  main: {
    naming: '메인',
    icon: <MainIcon />,
    route: '/',
  },
  request: {
    naming: '의뢰',
    icon: <RequestIcon />,
    route: '/request',
  },
  experiment: {
    naming: '실험',
    icon: <ExperimentIcon />,
    route: '/experiment',
  },
  user: {
    naming: '내정보',
    icon: <UserIcon />,
    route: '/user',
  },
} as const;

export type NavItemType = keyof typeof NAV_INFO;

export const navItemList = Object.keys(NAV_INFO) as [NavItemType];

export interface NavItemProps {
  /** 네비게이션 요소 중 하나 */
  type: NavItemType;
}

/**
 * 네비게이션 요소 하나를 그리는 컴포넌트 (반응형)
 */
const NavItem = ({ type }: NavItemProps) => {
  const router = useRouter();

  const isThisPage = router ? router.pathname === NAV_INFO[type].route : false;

  const thisPageClassName = isThisPage ? 'on' : undefined;

  const selectedColor = isThisPage
    ? COLORS.primary.normal
    : COLORS.grayscale.gray5;

  return (
    <styles.styledNavItem className={thisPageClassName}>
      <Link href={NAV_INFO[type].route} passHref>
        <styles.LinkBox>
          <styles.iconWrap>{NAV_INFO[type].icon}</styles.iconWrap>
          <StyledText
            className="nav-name"
            color={selectedColor}
            textStyleName={TEXT_STYLE_NAME.button3}
          >
            {NAV_INFO[type].naming}
          </StyledText>
        </styles.LinkBox>
      </Link>
    </styles.styledNavItem>
  );
};

export default NavItem;
