import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  expPostDetail,
  expRequestPost,
  reqAnswerPosts,
  reqPostDetail,
} from 'src/dummyData';
import PostDetailTemplate, { PostDetailTemplateProps } from '.';

export default {
  title: 'components/template/PostDetailTemplate',
  component: PostDetailTemplate,
} as ComponentMeta<typeof PostDetailTemplate>;

const Template: ComponentStory<typeof PostDetailTemplate> = ({
  type,
  post,
  relativePosts,
  commentInputValue,
  onCommentTextChange,
  onInterestPress,
}: PostDetailTemplateProps) => (
  <PostDetailTemplate
    type={type}
    post={post}
    relativePosts={relativePosts}
    commentInputValue={commentInputValue}
    onCommentTextChange={onCommentTextChange}
    onInterestPress={onInterestPress}
  />
);

export const RequestPostDetail = Template.bind({});
RequestPostDetail.args = {
  type: 'request',
  post: reqPostDetail,
  relativePosts: reqAnswerPosts,
  commentInputValue: 'comment',
};

export const ExperimentPostDetail = Template.bind({});
ExperimentPostDetail.args = {
  type: 'experiment',
  post: expPostDetail,
  relativePosts: expRequestPost,
  commentInputValue: 'comment',
};
