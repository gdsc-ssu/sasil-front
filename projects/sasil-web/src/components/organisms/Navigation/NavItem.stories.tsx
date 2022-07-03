import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NAV_INFO } from '@sasil/common';
import { URL_INFO } from '@/constants/urlInfo';
import NavItem, { NavItemProps } from './NavItem';

export default {
  title: 'components/organism/Navigation/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = ({
  type,
  name,
  targetURL,
  isFocused,
}: NavItemProps) => (
  <NavItem
    type={type}
    name={name}
    targetURL={targetURL}
    isFocused={isFocused}
  />
);

export const Main = Template.bind({});
Main.args = {
  type: 'main',
  name: NAV_INFO.main.name_kr,
  targetURL: URL_INFO.main,
  isFocused: true,
};

export const Request = Template.bind({});
Request.args = {
  type: 'request',
  name: NAV_INFO.request.name_kr,
  targetURL: URL_INFO.request,
  isFocused: true,
};

export const Experiment = Template.bind({});
Experiment.args = {
  type: 'experiment',
  name: NAV_INFO.experiment.name_kr,
  targetURL: URL_INFO.experiment,
  isFocused: true,
};

export const User = Template.bind({});
User.args = {
  type: 'user',
  name: NAV_INFO.user.name_kr,
  targetURL: URL_INFO.user,
  isFocused: true,
};
