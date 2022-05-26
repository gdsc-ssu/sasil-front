import React from 'react';

import SearchIcon from '@/assets/icons/Search.svg';
import TextInput from '@/components/atoms/TextInput';
import * as styles from './SearchBar.style';

export interface SearchBarProps {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar = ({
  onChange,
  onSearch,
  value,
  className,
}: SearchBarProps) => (
  <styles.styledSearchBar onSubmit={onSearch} className={className}>
    <TextInput onChange={onChange} value={value} />
    <styles.iconWrap type="submit">
      <SearchIcon />
    </styles.iconWrap>
  </styles.styledSearchBar>
);

export default SearchBar;
