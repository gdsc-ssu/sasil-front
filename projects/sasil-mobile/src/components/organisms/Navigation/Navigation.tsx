import NavItem, { NavItemProps } from './NavItem';
import * as styles from './Navigation.style';

export interface NavigationProps {
  navListInfo: Array<NavItemProps>;
}

/**
 * 페이지 이동을 위한 네비게이션을 생성하는 컴포넌트
 */
const Navigation = ({ navListInfo }: NavigationProps) => (
  <styles.styledNavigation>
    {navListInfo.map((navInfo) => (
      <NavItem
        type={navInfo.type}
        name={navInfo.name}
        isFocused={navInfo.isFocused}
        onPress={navInfo.onPress}
        key={navInfo.type}
      />
    ))}
  </styles.styledNavigation>
);

export default Navigation;
