import NavItem, { navItemList } from '@/components/molelcules/NavItem';

import * as styles from './Navigation.style';

const Navigation = () => (
  <styles.styledNavigation>
    {navItemList.map((navItem) => (
      <NavItem type={navItem} key={navItem} />
    ))}
  </styles.styledNavigation>
);

export default Navigation;
