import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { expPosts, users } from 'src/dummyData';
import UserPageTemplate, { UserPageTemplateProps } from './UserPageTemplate';

export default {
  title: 'components/template/UserPageTemplate',
  component: UserPageTemplate,
} as ComponentMeta<typeof UserPageTemplate>;

const Template: ComponentStory<typeof UserPageTemplate> = ({
  userInfo,
  tabType,
  postType,
  posts,
  isMyPage,
  postsRef,
}: UserPageTemplateProps) => (
  <UserPageTemplate
    userInfo={userInfo}
    tabType={tabType}
    postType={postType}
    posts={posts}
    postsRef={postsRef}
    isMyPage={isMyPage}
  />
);

export const Default = Template.bind({});
Default.args = {
  userInfo: users[0],
  tabType: 'userPosts',
  postType: 'experiment',
  posts: expPosts,
  isMyPage: true,
};
