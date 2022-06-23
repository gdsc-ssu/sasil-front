import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPostsNavCard, { MainPostsNavCardProps } from './MainPostsNavCard';

export default {
  title: 'components/template/PostsWrap/MainPostsNavCard',
  component: MainPostsNavCard,
} as ComponentMeta<typeof MainPostsNavCard>;

const Template: ComponentStory<typeof MainPostsNavCard> = ({
  type,
}: MainPostsNavCardProps) => <MainPostsNavCard type={type} />;

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
