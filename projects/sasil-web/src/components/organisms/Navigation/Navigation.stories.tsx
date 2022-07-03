import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navigation, { NavigationProps } from '.';

export default {
  title: 'components/organism/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = ({
  focusType,
}: NavigationProps) => <Navigation focusType={focusType} />;

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
