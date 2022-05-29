import { NAV_INFO, NavItemType } from '@sasil/common';
import { URL_INFO } from '@/constants/urlInfo';
import NavItem from './NavItem';
import * as styles from './Navigation.style';

export interface NavigationProps {
  targetURL: string;
}

/**
 * 페이지 이동을 위한 네비게이션을 생성하는 컴포넌트 (반응형)
 */
const Navigation = ({ targetURL }: NavigationProps) => {
  const navList = Object.keys(NAV_INFO) as [NavItemType];

  return (
    <styles.styledNavigation>
      {navList.map((navType) => {
        const isFocused = targetURL === URL_INFO[navType]; // TODO template prop으로 pathname 던져주기

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
    </styles.styledNavigation>
  );
};

export default Navigation;
