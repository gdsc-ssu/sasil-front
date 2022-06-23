import { NAV_INFO, NavItemKey } from '@sasil/common';
import { URL_INFO } from '@/constants/urlInfo';
import NavItem from './NavItem';
import * as styles from './Navigation.style';

export interface NavigationProps {
  /** 현재 페이지의 pathname */
  targetURL: string;
}

/**
 * 페이지 이동을 위한 네비게이션을 생성하는 컴포넌트 (반응형)
 */
const Navigation = ({ targetURL }: NavigationProps) => {
  const navList = Object.keys(NAV_INFO) as [NavItemKey];

  return (
    <styles.StyledNavigation>
      {navList.map((navType) => {
        const isFocused = targetURL === URL_INFO[navType];

        return (
          <NavItem
            type={NAV_INFO[navType].type}
            name={NAV_INFO[navType].name}
            targetURL={URL_INFO[navType]}
            isFocused={isFocused}
            key={navType}
          />
        );
      })}
    </styles.StyledNavigation>
  );
};

export default Navigation;
