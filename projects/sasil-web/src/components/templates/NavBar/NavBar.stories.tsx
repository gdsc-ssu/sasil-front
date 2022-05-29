import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { URL_INFO } from '@/constants/urlInfo';
import NavBar, { NavBarProps } from '.';

export default {
  title: 'components/template/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = ({
  targetURL,
  children,
}: NavBarProps) => <NavBar targetURL={targetURL}>{children}</NavBar>;

export const Main = Template.bind({});
Main.args = {
  targetURL: URL_INFO.Main,
};

export const Request = Template.bind({});
Request.args = {
  targetURL: URL_INFO.Request,
};

export const Experiment = Template.bind({});
Experiment.args = {
  targetURL: URL_INFO.Experiment,
};

export const User = Template.bind({});
User.args = {
  targetURL: URL_INFO.User,
};
