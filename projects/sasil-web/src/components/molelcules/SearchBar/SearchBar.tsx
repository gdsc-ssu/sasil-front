import React from 'react';

import SearchIcon from '@/assets/icons/Search.svg';
import TextInput from '@/components/atoms/TextInput';
import * as styles from './SearchBar.style';

export interface SearchBarProps {
  /** 검색창의 value 문자열 */
  value: string;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
  /** 검색창의 입력값에 따른 변화를 컨트롤할 함수 */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
