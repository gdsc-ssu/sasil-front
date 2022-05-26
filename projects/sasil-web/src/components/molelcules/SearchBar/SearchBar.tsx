import SearchIcon from '@/assets/icons/Search.svg';
import TextInput from '@/components/atoms/TextInput';
import * as styles from './SearchBar.style';

export interface SearchBarProps {
  onChange: () => void;
  onSearch: () => void;
}

const SearchBar = ({ onChange, onSearch }: SearchBarProps) => (
  <styles.styledSearchBar onSubmit={onSearch}>
    <TextInput onChange={onChange} />
    <styles.iconWrap type="submit">
      <SearchIcon />
    </styles.iconWrap>
  </styles.styledSearchBar>
);

export default SearchBar;
