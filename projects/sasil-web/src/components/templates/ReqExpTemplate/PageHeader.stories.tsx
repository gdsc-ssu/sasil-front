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
}: PageHeaderProps) => <PageHeader type={type} categories={categories} />;

export const ExperimentPageHeader = Template.bind({});
ExperimentPageHeader.args = {
  type: 'experiment',
  categories,
};

export const RequestPageHeader = Template.bind({});
RequestPageHeader.args = {
  type: 'request',
  categories,
};
