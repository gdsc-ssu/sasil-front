import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar, { SearchBarProps } from '.';

export default {
  title: 'components/molecule/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = ({
  value,
  onChange,
  onSearch,
}: SearchBarProps) => (
  <SearchBar value={value} onSearch={onSearch} onChange={onChange} />
);

export const Default = Template.bind({});
