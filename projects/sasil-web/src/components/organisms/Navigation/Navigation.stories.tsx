import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navigation, { NavigationProps } from '.';

export default {
  title: 'components/organism/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = ({
  target,
}: NavigationProps) => <Navigation target={target} />;

export const Default = Template.bind({});
Default.args = {
  target: 'main',
};
