import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBar, { NavBarProps } from '.';

export default {
  title: 'components/template/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = ({
  focusType,
  children,
}: NavBarProps) => <NavBar focusType={focusType}>{children}</NavBar>;

export const Main = Template.bind({});
Main.args = {
  focusType: 'main',
};

export const Request = Template.bind({});
Request.args = {
  focusType: 'request',
};

export const Experiment = Template.bind({});
Experiment.args = {
  focusType: 'experiment',
};

export const User = Template.bind({});
User.args = {
  focusType: 'user',
};
