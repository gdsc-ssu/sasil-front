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
/**
 * 검색바를 생성하는 컴포넌트
 */
const SearchBar = ({
  /** 검색창의 value 문자열 */
  value,
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className,
  /** 검색창의 입력값에 따른 변화를 컨트롤할 함수 */
  onChange,
  /** 검색 동작을 컨트롤할 함수 */
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
