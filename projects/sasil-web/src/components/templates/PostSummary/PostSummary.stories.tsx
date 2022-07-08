import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { reqAnswerPosts, reqPostDetail } from 'src/dummyData';
import PostSummary, { PostSummaryProps } from './PostSummary';

export default {
  title: 'components/template/PostSummary',
  component: PostSummary,
} as ComponentMeta<typeof PostSummary>;

const Template: ComponentStory<typeof PostSummary> = ({
  type,
  post,
  relativePosts,
}: PostSummaryProps) => (
  <PostSummary type={type} post={post} relativePosts={relativePosts} />
);

export const ExperimentSummary = Template.bind({});
ExperimentSummary.args = {
  type: 'experiment',
  post: reqPostDetail,
  relativePosts: reqAnswerPosts,
};

export const RequestSummary = Template.bind({});
RequestSummary.args = {
  type: 'request',
  post: reqPostDetail,
  relativePosts: reqAnswerPosts,
};
