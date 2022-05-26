import Navigation from '@/components/organisms/Navigation';
import ProfileImage from '@/components/atoms/ProfileImage';
import SearchBar from '@/components/molelcules/SearchBar';

import * as styles from './TopBar.style';

const TopBar = () => {
  const handleChange = () => {};
  const handleSearch = () => {};

  return (
    <styles.styledTopBar>
      <SearchBar
        className="search-bar"
        onChange={handleChange}
        onSearch={handleSearch}
      />
      <styles.sideMenu>
        <Navigation target="main" />
        <ProfileImage size={34} />
      </styles.sideMenu>
    </styles.styledTopBar>
  );
};

export default TopBar;
