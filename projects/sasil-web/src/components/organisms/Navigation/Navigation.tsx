import NavItem, { navItemList } from '@/components/molelcules/NavItem';

import * as styles from './Navigation.style';

/**
 * 페이지 이동을 위한 네비게이션을 생성하는 컴포넌트 (반응형)
 */
const Navigation = () => (
  <styles.styledNavigation>
    {navItemList.map((navItem) => (
      <NavItem type={navItem} key={navItem} />
    ))}
  </styles.styledNavigation>
);

export default Navigation;
