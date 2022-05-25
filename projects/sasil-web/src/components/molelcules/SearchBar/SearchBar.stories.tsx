import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar, { SearchBarProps } from '.';

export default {
  title: 'components/molecule/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = ({
  onChange,
  onSearch,
}: SearchBarProps) => <SearchBar onSearch={onSearch} onChange={onChange} />;

export const Default = Template.bind({});
