import React from 'react';

import SearchIcon from '@/assets/icons/Search.svg';
import TextInput, { TextInputProps } from '@/components/atoms/TextInput';
import * as styles from './SearchBar.style';

export interface SearchBarProps
  extends Pick<TextInputProps, 'value' | 'className' | 'onChange'> {
  /** 검색 동작을 컨트롤할 함수 */
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}
/**
 * 검색바를 생성하는 컴포넌트
 */
const SearchBar = ({
  value,
  className,
  onChange,
  onSearch,
}: SearchBarProps) => (
  <styles.styledSearchBar onSubmit={onSearch} className={className}>
    <TextInput onChange={onChange} value={value} />
    <styles.iconWrap type="submit">
      <SearchIcon />
    </styles.iconWrap>
  </styles.styledSearchBar>
);

export default SearchBar;
