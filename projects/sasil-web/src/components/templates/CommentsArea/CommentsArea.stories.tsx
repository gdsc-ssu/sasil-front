import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CommentsArea, { CommentsAreaProps } from '.';

export default {
  title: 'components/template/CommentsArea',
  component: CommentsArea,
} as ComponentMeta<typeof CommentsArea>;

const Template: ComponentStory<typeof CommentsArea> = ({
  comments,
  inputValue,
  onCommentTextChange,
}: CommentsAreaProps) => (
  <CommentsArea
    comments={comments}
    inputValue={inputValue}
    onCommentTextChange={onCommentTextChange}
  />
);

export const Default = Template.bind({});
Default.args = {
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
  inputValue: 'input value임',
};
