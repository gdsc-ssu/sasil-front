import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { useInputChange } from '@/logics/hooks/useInputChange';
import Navigation from '@/components/organisms/Navigation';
import ProfileImage from '@/components/atoms/ProfileImage';
import SearchBar from '@/components/molelcules/SearchBar';
import * as styles from './TopBar.style';

const TopBar = () => {
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
    <styles.styledTopBar>
      <SearchBar
        className="search-bar"
        value={searchVal}
        onChange={handleChangeSearchVal}
        onSearch={handleSearch}
      />
      <styles.sideMenu>
        <Navigation />
        <ProfileImage size={34} />
      </styles.sideMenu>
    </styles.styledTopBar>
  );
};

export default TopBar;
