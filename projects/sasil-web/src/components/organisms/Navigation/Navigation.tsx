import { NAV_INFO, NavItemKey } from '@sasil/common';
import { URL_INFO } from '@/constants/urlInfo';
import NavItem from './NavItem';
import * as styles from './Navigation.style';

export interface NavigationProps {
  focusType: NavItemKey;
}

// TODO: focusType을 Template 단에서 props drilling으로 받아오는데, Navigation에서 router.pathname 이용해서 사용하는 방식은 어떤지?
/**
 * 페이지 이동을 위한 네비게이션을 생성하는 컴포넌트 (반응형)
 */
const Navigation = ({ focusType }: NavigationProps) => {
  const navList = Object.keys(NAV_INFO) as [NavItemKey];

  return (
    <styles.StyledNavigation>
      {navList.map((navType) => {
        const isFocused = focusType === navType;

        return (
          <NavItem
            type={navType}
            name={NAV_INFO[navType].name_kr}
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
