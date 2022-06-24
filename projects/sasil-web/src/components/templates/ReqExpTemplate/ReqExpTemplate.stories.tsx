import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { categories, reqPosts, expPosts } from 'src/dummyData';
import ReqExpTemplate, { ReqExpTemplateProps } from './ReqExpTemplate';

export default {
  title: 'components/template/ReqExpTemplate',
  component: ReqExpTemplate,
} as ComponentMeta<typeof ReqExpTemplate>;

const Template: ComponentStory<typeof ReqExpTemplate> = ({
  type,
  posts,
}: ReqExpTemplateProps) => (
  <ReqExpTemplate type={type} categories={categories} posts={posts} />
);

export const ExperimentPageTemplate = Template.bind({});
ExperimentPageTemplate.args = {
  type: 'experiment',
  categories,
  posts: expPosts,
};

export const RequestPageTemplate = Template.bind({});
RequestPageTemplate.args = {
  type: 'request',
  categories,
  posts: reqPosts,
};
