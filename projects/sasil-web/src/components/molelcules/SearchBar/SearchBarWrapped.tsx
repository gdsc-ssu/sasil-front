import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { useInputChange } from '@/logics/hooks/useInputChange';
import SearchBar from './SearchBar';

// TODO
export interface SearchBarProps {
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}
/**
 * TODO
 */
const SearchBarWrapped = ({ className }: SearchBarProps) => {
  const router = useRouter();

  const [searchVal, handleChangeSearchVal] = useInputChange('');

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
    <SearchBar
      value={searchVal}
      className={className}
      onChange={handleChangeSearchVal}
      onSearch={handleSearch}
    />
  );
};

export default SearchBarWrapped;
