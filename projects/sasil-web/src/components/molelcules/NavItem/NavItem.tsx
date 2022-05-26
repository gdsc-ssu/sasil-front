import MainIcon from '@/assets/icons/Main.svg';
import RequestIcon from '@/assets/icons/Request.svg';
import ExperimentIcon from '@/assets/icons/Experiment.svg';
import UserIcon from '@/assets/icons/User.svg';
import StyledText from '@/components/atoms/StyledText';
import { TEXT_STYLE_NAME, COLORS, MEDIA_QUERIES } from '@sasil/common';
import Link from 'next/link';
import * as styles from './NavItem.style';

const NAV_INFO = {
  main: {
    naming: '메인',
    icon: <MainIcon strokeWidth="1.6" />,
    route: '/',
  },
  request: {
    naming: '의뢰',
    icon: <RequestIcon strokeWidth="0.1" />,
    route: '/request',
  },
  experiment: {
    naming: '실험',
    icon: <ExperimentIcon strokeWidth="0.1" />,
    route: '/experiment',
  },
  user: {
    naming: '내정보',
    icon: <UserIcon strokeWidth="0.1" />,
    route: '/user',
  },
} as const;

export type NavItemType = keyof typeof NAV_INFO;

export const navItemList = Object.keys(NAV_INFO) as [NavItemType];

export interface NavItemProps {
  type: NavItemType;
  isChecked?: boolean;
}

const NavItem = ({ type, isChecked }: NavItemProps) => {
  const selectedColor = isChecked
    ? COLORS.primary.normal
    : COLORS.grayscale.gray5;

  const className = isChecked ? 'on' : undefined;

  const isMobileSize = false;
  // window?.matchMedia(MEDIA_QUERIES.mobile).matches ?? false;

  return (
    <styles.styledNavItem className={className}>
      <Link href={NAV_INFO[type].route} passHref>
        <styles.LinkBox>
          <styles.iconWrap>{NAV_INFO[type].icon}</styles.iconWrap>
          {isMobileSize && (
            <StyledText
              color={selectedColor}
              textStyleName={TEXT_STYLE_NAME.button3}
            >
              {NAV_INFO[type].naming}
            </StyledText>
          )}
        </styles.LinkBox>
      </Link>
    </styles.styledNavItem>
  );
};

export default NavItem;
