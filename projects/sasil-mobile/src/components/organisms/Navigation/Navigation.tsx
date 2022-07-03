import { useSafeAreaInsets } from 'react-native-safe-area-context';

import NavItem, { NavItemProps } from './NavItem';
import * as styles from './Navigation.style';

export interface NavigationProps {
  navListInfo: Array<NavItemProps>;
}

/**
 * 페이지 이동을 위한 네비게이션을 생성하는 컴포넌트
 */
const Navigation = ({ navListInfo }: NavigationProps) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <styles.StyledNavigation paddingBottom={bottom}>
      {navListInfo.map((navInfo) => (
        <NavItem
          type={navInfo.type}
          name={navInfo.name}
          isFocused={navInfo.isFocused}
          onPress={navInfo.onPress}
          key={navInfo.type}
        />
      ))}
    </styles.StyledNavigation>
  );
};

export default Navigation;
