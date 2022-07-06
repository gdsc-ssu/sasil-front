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
  comments,
  relativePosts,
  commentInputValue,
  onCommentTextChange,
  onInterestPress,
}: PostDetailTemplateProps) => (
  <PostDetailTemplate
    type={type}
    post={post}
    comments={comments}
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
  comments: [
    {
      id: 1,
      user: { id: 1, nickname: '작성자1', profileImg: null },
      content: '안녕하세요 댓글이에요 1',
      createdAt: '2022-05-19T14:53:43.044Z',
      updatedAt: '2022-05-19T14:53:43.044Z',
    },
    {
      id: 2,
      user: { id: 2, nickname: '작성자2', profileImg: null },
      content: '안녕하세요  댓글이에요 2',
      createdAt: '2022-05-19T14:53:43.044Z',
      updatedAt: '2022-05-19T14:53:43.044Z',
    },
    {
      id: 3,
      user: { id: 3, nickname: '작성자3', profileImg: null },
      content: '안녕하세요  댓글이에요 3',
      createdAt: '2022-05-19T14:53:43.044Z',
      updatedAt: '2022-05-19T14:53:43.044Z',
    },
  ],
};

export const ExperimentPostDetail = Template.bind({});
ExperimentPostDetail.args = {
  type: 'experiment',
  post: expPostDetail,
  relativePosts: expRequestPost,
  commentInputValue: 'comment',
  comments: [
    {
      id: 1,
      user: { id: 1, nickname: '작성자1', profileImg: null },
      content: '안녕하세요 댓글이에요 1',
      createdAt: '2022-05-19T14:53:43.044Z',
      updatedAt: '2022-05-19T14:53:43.044Z',
    },
    {
      id: 2,
      user: { id: 2, nickname: '작성자2', profileImg: null },
      content: '안녕하세요  댓글이에요 2',
      createdAt: '2022-05-19T14:53:43.044Z',
      updatedAt: '2022-05-19T14:53:43.044Z',
    },
    {
      id: 3,
      user: { id: 3, nickname: '작성자3', profileImg: null },
      content: '안녕하세요  댓글이에요 3',
      createdAt: '2022-05-19T14:53:43.044Z',
      updatedAt: '2022-05-19T14:53:43.044Z',
    },
  ],
};
