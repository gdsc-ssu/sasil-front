import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Comment, { CommentProps } from '.';

export default {
  title: 'components/organism/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = ({
  commId,
  writerObj,
  content,
  onMenuDisplayToggle,
  updateCommInfo,
}: CommentProps) => (
  <Comment
    commId={commId}
    writerObj={writerObj}
    content={content}
    onMenuDisplayToggle={onMenuDisplayToggle}
    updateCommInfo={updateCommInfo}
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
