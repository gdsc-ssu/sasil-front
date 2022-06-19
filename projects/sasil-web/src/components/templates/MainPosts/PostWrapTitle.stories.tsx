import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostWrapTitle, { PostWrapTitleProps } from './PostWrapTitle';

export default {
  title: 'components/template/PostWrapLabel',
  component: PostWrapTitle,
} as ComponentMeta<typeof PostWrapTitle>;

const Template: ComponentStory<typeof PostWrapTitle> = ({
  type,
}: PostWrapTitleProps) => <PostWrapTitle type={type} />;

export const HotRequest = Template.bind({});
HotRequest.args = {
  type: 'hotRequest',
};

export const PopularExperiment = Template.bind({});
PopularExperiment.args = {
  type: 'popExperiment',
};

export const PopularRequest = Template.bind({});
PopularRequest.args = {
  type: 'popRequest',
};
