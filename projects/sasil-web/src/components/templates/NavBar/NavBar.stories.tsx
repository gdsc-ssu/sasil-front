import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBar, { NavBarProps } from '.';

export default {
  title: 'components/template/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = ({ children }: NavBarProps) => (
  <NavBar>{children}</NavBar>
);

export const Default = Template.bind({});
