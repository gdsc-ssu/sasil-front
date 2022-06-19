import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expPosts, reqPosts } from 'src/dummyData';
import PostWrap, { PostWrapProps } from '.';

export default {
  title: 'components/template/PostWrap',
  component: PostWrap,
} as ComponentMeta<typeof PostWrap>;

const Template: ComponentStory<typeof PostWrap> = ({
  posts,
  type,
}: PostWrapProps) => <PostWrap type={type} posts={posts} />;

export const HotRequest = Template.bind({});
HotRequest.args = {
  posts: reqPosts,
  type: 'hotRequest',
};

export const PopularExperiment = Template.bind({});
PopularExperiment.args = {
  posts: expPosts,
  type: 'popExperiment',
};

export const PopularRequest = Template.bind({});
PopularRequest.args = {
  posts: reqPosts,
  type: 'popRequest',
};
