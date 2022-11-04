import { NAV_INFO, NavItemKey } from '@sasil/common';
import { URL_INFO } from '@/constants/urlInfo';
import NavItem from './NavItem';
import * as styles from './Navigation.style';

export interface NavigationProps {
  focusType?: NavItemKey;
  userId?: number | null;
}

/**
 * 페이지 이동을 위한 네비게이션을 생성하는 컴포넌트 (반응형)
 */
const Navigation = ({ focusType, userId }: NavigationProps) => {
  const navList = Object.keys(NAV_INFO) as [NavItemKey];

  return (
    <styles.StyledNavigation>
      {navList.map((navType) => {
        const isFocused = focusType === navType;

        const myPageURL = userId
          ? `${URL_INFO[navType]}/${userId}`
          : URL_INFO.login;
        const targetURL = navType === 'user' ? myPageURL : URL_INFO[navType];

        return (
          <NavItem
            type={navType}
            name={NAV_INFO[navType].name_kr}
            targetURL={targetURL}
            isFocused={isFocused}
            key={navType}
          />
        );
      })}
    </styles.StyledNavigation>
  );
};

export default Navigation;
