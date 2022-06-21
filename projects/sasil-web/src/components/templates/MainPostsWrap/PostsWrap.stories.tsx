import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expPosts, reqPosts } from 'src/dummyData';
import PostsWrap, { PostsWrapProps } from '.';

export default {
  title: 'components/template/PostsWrap',
  component: PostsWrap,
} as ComponentMeta<typeof PostsWrap>;

const Template: ComponentStory<typeof PostsWrap> = ({
  posts,
  type,
}: PostsWrapProps) => <PostsWrap type={type} posts={posts} />;

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
