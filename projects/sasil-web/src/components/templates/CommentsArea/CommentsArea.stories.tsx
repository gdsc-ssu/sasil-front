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
      writerObj: { nickname: '작성자1', profileImg: null },
      content: '안녕하세요 댓글이에요 1',
    },
    {
      id: 2,
      writerObj: { nickname: '작성자2', profileImg: null },
      content: '안녕하세요  댓글이에요 2',
    },
    {
      id: 3,
      writerObj: { nickname: '작성자3', profileImg: null },
      content: '안녕하세요  댓글이에요 3',
    },
  ],
  inputValue: 'input value임',
};
