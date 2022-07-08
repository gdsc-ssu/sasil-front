import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { reqPostDetail } from 'src/dummyData';
import PostInfoCard, { PostInfoCardProps } from '.';

export default {
  title: 'components/organism/PostInfoCard',
  component: PostInfoCard,
} as ComponentMeta<typeof PostInfoCard>;

const Template: ComponentStory<typeof PostInfoCard> = ({
  post,
}: PostInfoCardProps) => <PostInfoCard post={post} />;

export const Default = Template.bind({});
Default.args = {
  post: reqPostDetail,
};
