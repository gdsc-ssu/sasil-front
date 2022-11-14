import React from 'react';
import { useAtom } from 'jotai';

import { NavItemKey } from '@sasil/common';
import { getUserInfoAtom } from '@/logics/store/actions';
import Navigation from '@/components/organisms/Navigation';
import ProfileImage from '@/components/atoms/ProfileImage';
import { SearchBarWrapped } from '@/components/molelcules/SearchBar';
import * as styles from './NavBar.style';

export interface NavBarProps {
  children: React.ReactNode;
  focusType?: NavItemKey;
  className?: string;
}

/**
 * 메뉴바를 생성하는 컴포넌트 (반응형)
 */
const NavBar = ({ children, focusType, className }: NavBarProps) => {
  const [userInfo] = useAtom(getUserInfoAtom);

  const profileImgURL = userInfo?.profileImg;
  const userId = userInfo?.id;

  return (
    <>
      <styles.StyledNavBar className={className}>
        <SearchBarWrapped className="menu_search-bar" />
        <styles.SideMenu>
          <Navigation focusType={focusType} userId={userId} />
          <ProfileImage
            size={34}
            className="menu_profile-img"
            src={profileImgURL}
          />
        </styles.SideMenu>
      </styles.StyledNavBar>
      {children}
    </>
  );
};

export default NavBar;
