import React from 'react';

import { NavItemKey } from '@sasil/common';
import Navigation from '@/components/organisms/Navigation';
import ProfileImage from '@/components/atoms/ProfileImage';
import { SearchBarWrapped } from '@/components/molelcules/SearchBar';
import * as styles from './NavBar.style';

export interface NavBarProps {
  children: React.ReactNode;
  focusType: NavItemKey;
  className?: string;
}

// TODO: 프로필사진 전역 상태에서 가져오기
/**
 * 메뉴바를 생성하는 컴포넌트 (반응형)
 */
const NavBar = ({ children, focusType, className }: NavBarProps) => (
  <>
    <styles.StyledNavBar className={className}>
      <SearchBarWrapped className="menu_search-bar" />
      <styles.SideMenu>
        <Navigation focusType={focusType} />
        <ProfileImage size={34} className="menu_profile-img" />
      </styles.SideMenu>
    </styles.StyledNavBar>
    {children}
  </>
);

export default NavBar;
