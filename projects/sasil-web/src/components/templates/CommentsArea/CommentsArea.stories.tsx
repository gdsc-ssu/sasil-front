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
  onCommentTextChange,
}: CommentsAreaProps) => (
  <CommentsArea
    comments={comments}
    inputValue={inputValue}
    canWrite={canWrite}
    onCommentTextChange={onCommentTextChange}
  />
);

export const Default = Template.bind({});
Default.args = {
  comments,
  canWrite: false,
  inputValue: 'input value임',
};
