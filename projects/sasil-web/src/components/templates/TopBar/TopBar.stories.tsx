import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TopBar from '.';

export default {
  title: 'components/template/TopBar',
  component: TopBar,
} as ComponentMeta<typeof TopBar>;

const Template: ComponentStory<typeof TopBar> = () => <TopBar />;

export const Default = Template.bind({});
