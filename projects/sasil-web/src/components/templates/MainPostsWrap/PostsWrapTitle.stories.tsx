import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostsWrapTitle, { PostsWrapTitleProps } from './PostsWrapTitle';

export default {
  title: 'components/template/PostsWrapLabel',
  component: PostsWrapTitle,
} as ComponentMeta<typeof PostsWrapTitle>;

const Template: ComponentStory<typeof PostsWrapTitle> = ({
  type,
}: PostsWrapTitleProps) => <PostsWrapTitle type={type} />;

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
