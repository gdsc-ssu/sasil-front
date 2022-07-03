import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostHeader, { PostHeaderProps } from './PostHeader';

export default {
  title: 'components/organism/Post/PostCard/PostHeader',
  component: PostHeader,
} as ComponentMeta<typeof PostHeader>;

const Template: ComponentStory<typeof PostHeader> = ({
  thumbnail,
  categories,
}: PostHeaderProps) => (
  <PostHeader categories={categories} thumbnail={thumbnail} />
);

export const Default = Template.bind({});
Default.args = {
  thumbnail:
    'https://image.shutterstock.com/image-photo/darkeyed-girl-pink-makeup-chewing-600w-1457328599.jpg',
  categories: [
    { id: 1, name: '치킨' },
    { id: 2, name: '피자' },
    { id: 3, name: '개꿀맛음식' },
  ],
};

export const WithoutThumbnail = Template.bind({});
WithoutThumbnail.args = {
  categories: [
    { id: 1, name: '치킨' },
    { id: 2, name: '피자' },
    { id: 3, name: '개꿀맛음식' },
  ],
};
