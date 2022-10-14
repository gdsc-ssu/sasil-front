import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import SearchBar from './SearchBar';

export interface SearchBarWrappedProps {
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}
/**
 *  SearchBar에 검색 기능을 더하여 생성하는 컴포넌트
 */
const SearchBarWrapped = ({ className }: SearchBarWrappedProps) => {
  const router = useRouter();
  const [value, setValue] = useState('');

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (value.trim().length > 0) {
        const keyword = value.replace('#', '');
        const searchType = value.indexOf('#') !== -1 ? 'tag' : 'query';

        router.push({
          pathname: `/search`,
          query: { keyword, stype: searchType },
        });
      }

      setValue('');
    },
    [router, value],
  );

  const onTextChange = useCallback((text: string) => {
    setValue(text);
  }, []);

  return (
    <SearchBar
      value={value}
      className={className}
      onTextChange={onTextChange}
      onSearch={handleSearch}
    />
  );
};

export default SearchBarWrapped;
