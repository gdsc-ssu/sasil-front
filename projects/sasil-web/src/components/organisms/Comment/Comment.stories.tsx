import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Comment, { CommentProps } from '.';

export default {
  title: 'components/organism/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = ({
  writerObj,
  content,
  onMenuDisplayToggle,
  checkIsWriter,
}: CommentProps) => (
  <Comment
    writerObj={writerObj}
    content={content}
    onMenuDisplayToggle={onMenuDisplayToggle}
    checkIsWriter={checkIsWriter}
  />
);

export const Default = Template.bind({});
Default.args = {
  writerObj: {
    id: 1,
    nickname: '작성자',
    profileImg: null,
  },
  content: '댓글댓글',
  onMenuDisplayToggle: () => {},
};
