import MainIcon from '@/assets/icons/Main.svg';
import RequestIcon from '@/assets/icons/Request.svg';
import ExperimentIcon from '@/assets/icons/Experiment.svg';
import UserIcon from '@/assets/icons/User.svg';
import StyledText from '@/components/atoms/StyledText';
import { TEXT_STYLE_NAME, COLORS, MEDIA_QUERIES } from '@sasil/common';
import * as styles from './NavItem.style';

const NAV_NAMING = {
  main: '메인',
  request: '의뢰',
  experiment: '실험',
  user: '내정보',
};

export type NavItemType = keyof typeof NAV_NAMING;

export interface NavItemProps {
  type: NavItemType;
  isChecked?: boolean;
}

const NAV_ICON = {
  main: <MainIcon strokeWidth="1.3" />,
  request: <RequestIcon strokeWidth="0.1" />,
  experiment: <ExperimentIcon strokeWidth="0.1" />,
  user: <UserIcon strokeWidth="0.1" />,
};

const NavItem = ({ type, isChecked }: NavItemProps) => {
  const selectedColor = isChecked
    ? COLORS.primary.normal
    : COLORS.grayscale.gray5;

  const className = isChecked ? 'on' : undefined;

  const isMobileSize = window.matchMedia(MEDIA_QUERIES.mobile).matches;

  return (
    <styles.styledNavItem className={className}>
      <styles.iconWrap>{NAV_ICON[type]}</styles.iconWrap>
      {isMobileSize && (
        <StyledText
          color={selectedColor}
          textStyleName={TEXT_STYLE_NAME.button3}
        >
          {NAV_NAMING[type]}
        </StyledText>
      )}
    </styles.styledNavItem>
  );
};

export default NavItem;
