import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { categories } from 'src/dummyData';
import PageHeader, { PageHeaderProps } from './PageHeader';

export default {
  title: 'components/template/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = ({
  type,
  sortType,
}: PageHeaderProps) => (
  <PageHeader type={type} sortType={sortType} categories={categories} />
);

export const ExperimentPageHeader = Template.bind({});
ExperimentPageHeader.args = {
  type: 'experiment',
  sortType: 'recent',
  categories,
};

export const RequestPageHeader = Template.bind({});
RequestPageHeader.args = {
  type: 'request',
  sortType: 'popular',
  categories,
};
