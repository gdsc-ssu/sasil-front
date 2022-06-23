import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostWriteNav from '.';

export default {
  title: 'components/organism/PostWriteNav',
  component: PostWriteNav,
} as ComponentMeta<typeof PostWriteNav>;

const Template: ComponentStory<typeof PostWriteNav> = () => <PostWriteNav />;

export const Default = Template.bind({});
Default.args = {};
