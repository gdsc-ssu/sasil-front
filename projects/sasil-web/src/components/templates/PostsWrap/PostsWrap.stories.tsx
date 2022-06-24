import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { expPosts, reqPosts } from 'src/dummyData';
import Posts, { PostsWrapProps } from './PostsWrap';

export default {
  title: 'components/template/PostsWrap/Basic',
  component: Posts,
} as ComponentMeta<typeof Posts>;

const Template: ComponentStory<typeof Posts> = ({ posts }: PostsWrapProps) => (
  <Posts posts={posts} />
);

export const Request = Template.bind({});
Request.args = { posts: reqPosts };

export const Experiment = Template.bind({});
Experiment.args = { posts: expPosts };
