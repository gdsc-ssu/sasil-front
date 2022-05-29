import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { URL_INFO } from '@/constants/urlInfo';
import Navigation, { NavigationProps } from '.';

export default {
  title: 'components/organism/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = ({
  targetURL,
}: NavigationProps) => <Navigation targetURL={targetURL} />;

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
