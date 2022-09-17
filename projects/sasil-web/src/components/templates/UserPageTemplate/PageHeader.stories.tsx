import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { users } from 'src/dummyData';
import PageHeader, { PageHeaderProps } from './PageHeader';

export default {
  title: 'components/template/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = ({
  tabType,
  userInfo,
}: PageHeaderProps) => <PageHeader tabType={tabType} userInfo={userInfo} />;

export const UserPageHeader = Template.bind({});
UserPageHeader.args = {
  tabType: 'userPosts',
  userInfo: users[0],
};
