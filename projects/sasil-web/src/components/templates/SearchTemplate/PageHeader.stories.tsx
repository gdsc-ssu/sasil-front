import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageHeader, { PageHeaderProps } from './PageHeader';

export default {
  title: 'components/template/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = ({
  keyword,
  isTag,
}: PageHeaderProps) => <PageHeader keyword={keyword} isTag={isTag} />;

export const TagSearchPageHeader = Template.bind({});
TagSearchPageHeader.args = {
  keyword: '태그',
  isTag: true,
};

export const QuerySearchPageHeader = Template.bind({});
QuerySearchPageHeader.args = {
  keyword: '키워드',
  isTag: false,
};
