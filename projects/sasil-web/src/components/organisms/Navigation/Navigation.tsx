import NavItem, {
  navItemList,
  NavItemType,
} from '@/components/molelcules/NavItem';

import * as styles from './Navigation.style';

export interface NavigationProps {
  target: NavItemType;
}

const Navigation = ({ target }: NavigationProps) => (
  <styles.styledNavigation>
    {navItemList.map((navItem) =>
      target === navItem ? (
        <NavItem type={navItem} isChecked />
      ) : (
        <NavItem type={navItem} />
      ),
    )}
  </styles.styledNavigation>
);

export default Navigation;
