import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostWriteTemplate from './PostWriteTemplate';

export default {
  title: 'components/template/PostWriteTemplate',
  component: PostWriteTemplate,
} as ComponentMeta<typeof PostWriteTemplate>;

const Template: ComponentStory<typeof PostWriteTemplate> = () => (
  <PostWriteTemplate />
);

export const RequestPostWrite = Template.bind({});
RequestPostWrite.args = {};

export const ExperimentPostWrite = Template.bind({});
ExperimentPostWrite.args = {};
