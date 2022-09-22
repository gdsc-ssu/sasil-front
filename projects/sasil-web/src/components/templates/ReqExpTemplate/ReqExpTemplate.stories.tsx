import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { categories, reqPosts, expPosts } from 'src/dummyData';
import ReqExpTemplate, { ReqExpTemplateProps } from './ReqExpTemplate';

export default {
  title: 'components/template/ReqExpTemplate',
  component: ReqExpTemplate,
} as ComponentMeta<typeof ReqExpTemplate>;

const Template: ComponentStory<typeof ReqExpTemplate> = ({
  postsRef,
  postType,
  sortType,
  posts,
}: ReqExpTemplateProps) => (
  <ReqExpTemplate
    postsRef={postsRef}
    postType={postType}
    sortType={sortType}
    categories={categories}
    posts={posts}
  />
);

export const ExperimentPageTemplate = Template.bind({});
ExperimentPageTemplate.args = {
  postType: 'experiment',
  categories,
  posts: expPosts,
};

export const RequestPageTemplate = Template.bind({});
RequestPageTemplate.args = {
  postType: 'request',
  categories,
  posts: reqPosts,
};
