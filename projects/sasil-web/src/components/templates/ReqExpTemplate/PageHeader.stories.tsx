import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { categories } from 'src/dummyData';
import PageHeader, { PageHeaderProps } from './PageHeader';

export default {
  title: 'components/template/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = ({
  postType,
  sortType,
}: PageHeaderProps) => (
  <PageHeader postType={postType} sortType={sortType} categories={categories} />
);

export const ExperimentPageHeader = Template.bind({});
ExperimentPageHeader.args = {
  postType: 'experiment',
  sortType: 'recent',
  categories,
};

export const RequestPageHeader = Template.bind({});
RequestPageHeader.args = {
  postType: 'request',
  sortType: 'popular',
  categories,
};
