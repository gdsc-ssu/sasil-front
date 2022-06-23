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
  type: NAV_INFO.Main.type,
  name: NAV_INFO.Main.name,
  targetURL: URL_INFO.Main,
  isFocused: true,
};

export const Request = Template.bind({});
Request.args = {
  type: NAV_INFO.Request.type,
  name: NAV_INFO.Request.name,
  targetURL: URL_INFO.Request,
  isFocused: true,
};

export const Experiment = Template.bind({});
Experiment.args = {
  type: NAV_INFO.Experiment.type,
  name: NAV_INFO.Experiment.name,
  targetURL: URL_INFO.Experiment,
  isFocused: true,
};

export const User = Template.bind({});
User.args = {
  type: NAV_INFO.User.type,
  name: NAV_INFO.User.name,
  targetURL: URL_INFO.User,
  isFocused: true,
};
