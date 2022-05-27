import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { useInputChange } from '@/logics/hooks/useInputChange';
import Navigation from '@/components/organisms/Navigation';
import ProfileImage from '@/components/atoms/ProfileImage';
import SearchBar from '@/components/molelcules/SearchBar';
import * as styles from './NavBar.style';

// TODO: 프로필사진 전역 상태에서 가져오기
/**
 * 메뉴바를 생성하는 컴포넌트 (반응형)
 */
const NavBar = () => {
  const router = useRouter();
  const [searchVal, , handleChangeSearchVal] = useInputChange('');

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (searchVal.trim().length > 0) {
        router.push(`/search/${searchVal}`); // TODO: 검색 결과 URL
      }
    },
    [router, searchVal],
  );

  return (
    <styles.styledNavBar>
      <SearchBar
        className="menu_search-bar"
        value={searchVal}
        onChange={handleChangeSearchVal}
        onSearch={handleSearch}
      />
      <styles.sideMenu>
        <Navigation />
        <ProfileImage size={34} className="menu_profile-img" />
      </styles.sideMenu>
    </styles.styledNavBar>
  );
};

export default NavBar;
