import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBarWrapped from './SearchBarWrapped';

export default {
  title: 'components/molecule/SearchBar/Wrapped',
  component: SearchBarWrapped,
} as ComponentMeta<typeof SearchBarWrapped>;

const Template: ComponentStory<typeof SearchBarWrapped> = () => (
  <SearchBarWrapped />
);

export const Default = Template.bind({});
