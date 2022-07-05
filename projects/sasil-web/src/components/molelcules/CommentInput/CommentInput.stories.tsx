import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentInput, { CommentInputProps } from '.';

export default {
  title: 'components/molecule/CommentInput',
  component: CommentInput,
} as ComponentMeta<typeof CommentInput>;

const Template: ComponentStory<typeof CommentInput> = ({
  value,
  onTextChange,
}: CommentInputProps) => (
  <CommentInput value={value} onTextChange={onTextChange} />
);

export const Default = Template.bind({});
Default.args = {
  value: '',
};
