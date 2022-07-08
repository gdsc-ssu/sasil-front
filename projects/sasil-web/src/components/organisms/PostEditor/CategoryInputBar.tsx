/* eslint-disable react/no-array-index-key */
import React from 'react';
import TextInput from '@/components/atoms/TextInput';
import CategoryBox from '@/components/molelcules/CategoryBox';
import * as styles from './CategoryInputBar.style';

export interface CategoryInputBarProps {
  cgValue: string;
  cgInputList: string[];
  onCgValueChange?: (text: string) => void;
  handleCategories?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const CategoryInputBar = ({
  cgValue,
  cgInputList,
  onCgValueChange,
  handleCategories,
}: CategoryInputBarProps) => (
  <styles.Bar>
    <styles.TagsWrap>
      {cgInputList.map((category: any, index: number) => (
        <CategoryBox name={category} key={index} />
      ))}
    </styles.TagsWrap>
    <TextInput
      value={cgValue}
      onTextChange={onCgValueChange}
      placeholder={cgInputList.length ? '' : '태그를 입력해주세요'}
      onKeyDown={handleCategories}
    />
  </styles.Bar>
);

export default CategoryInputBar;
