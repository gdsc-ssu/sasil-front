import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavItem, { NavItemProps } from '.';

export default {
  title: 'components/molecule/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = ({ type }: NavItemProps) => (
  <NavItem type={type} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'main',
};
