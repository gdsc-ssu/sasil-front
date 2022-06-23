import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expPosts, reqPosts } from 'src/dummyData';
import MainPostsWrap, { MainPostsWrapProps } from '.';

export default {
  title: 'components/template/PostsWrap/MainPostsWrap',
  component: MainPostsWrap,
} as ComponentMeta<typeof MainPostsWrap>;

const Template: ComponentStory<typeof MainPostsWrap> = ({
  posts,
  type,
}: MainPostsWrapProps) => <MainPostsWrap type={type} posts={posts} />;

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
