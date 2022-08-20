import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { reqPostDetail } from 'src/dummyData';
import PostContent, { PostContentProps } from './PostContent';

export default {
  title: 'components/organism/PostContent',
  component: PostContent,
} as ComponentMeta<typeof PostContent>;

const Template: ComponentStory<typeof PostContent> = ({
  post,
  menuDisplayInfo,
  onMenuDisplayToggle,
}: PostContentProps) => (
  <PostContent
    post={post}
    menuDisplayInfo={menuDisplayInfo}
    onMenuDisplayToggle={onMenuDisplayToggle}
  />
);

export const Detail = Template.bind({});
Detail.args = {
  post: reqPostDetail,
};
