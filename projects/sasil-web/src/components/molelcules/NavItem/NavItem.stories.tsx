import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavItem, { NavItemProps } from '.';

export default {
  title: 'components/molecule/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = ({
  type,
  isChecked,
}: NavItemProps) => <NavItem type={type} isChecked={isChecked} />;

export const Default = Template.bind({});
Default.args = {
  type: 'main',
};

export const Selected = Template.bind({});
Selected.args = {
  type: 'main',
  isChecked: true,
};
