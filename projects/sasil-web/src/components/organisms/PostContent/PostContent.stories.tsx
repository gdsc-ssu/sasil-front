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
  isWriter,
}: PostContentProps) => (
  <PostContent
    post={post}
    menuDisplayInfo={menuDisplayInfo}
    onMenuDisplayToggle={onMenuDisplayToggle}
    isWriter={isWriter}
  />
);

export const Detail = Template.bind({});
Detail.args = {
  post: reqPostDetail,
  isWriter: true,
};
