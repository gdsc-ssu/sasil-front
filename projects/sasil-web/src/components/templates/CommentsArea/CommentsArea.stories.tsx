import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { comments } from 'src/dummyData';
import CommentsArea, { CommentsAreaProps } from '.';

export default {
  title: 'components/template/CommentsArea',
  component: CommentsArea,
} as ComponentMeta<typeof CommentsArea>;

const Template: ComponentStory<typeof CommentsArea> = ({
  inputValue,
  canWrite,
  menuDisplayInfo,
  onCommentTextChange,
  onMenuDisplayToggle,
}: CommentsAreaProps) => (
  <CommentsArea
    comments={comments}
    inputValue={inputValue}
    canWrite={canWrite}
    menuDisplayInfo={menuDisplayInfo}
    onCommentTextChange={onCommentTextChange}
    onMenuDisplayToggle={onMenuDisplayToggle}
  />
);

export const Default = Template.bind({});
Default.args = {
  comments,
  canWrite: false,
  inputValue: 'input value임',
  menuDisplayInfo: {
    display: true,
    top: 500,
  },
};
