import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostAdd from './PostAdd';

export default {
  title: 'components/organism/postAdd/PostAdd',
  component: PostAdd,
} as ComponentMeta<typeof PostAdd>;

const Template: ComponentStory<typeof PostAdd> = () => <PostAdd />;

export const Default = Template.bind({});
Default.args = {};
