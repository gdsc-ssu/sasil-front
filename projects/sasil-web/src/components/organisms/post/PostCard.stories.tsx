import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as Post from '.';

export default {
  title: 'components/organism/post/PostCard',
  component: Post.Card,
} as ComponentMeta<typeof Post.Card>;

const CardTemplate: ComponentStory<typeof Post.Card> = ({
  title,
  likeCount,
  thumbnail,
  categories,
  postUrl,
}: Post.CardProps) => (
  <Post.Card
    title={title}
    postUrl={postUrl}
    likeCount={likeCount}
    thumbnail={thumbnail}
    categories={categories}
  />
);

export const ExperimentPostWithThumbnail = CardTemplate.bind({});
ExperimentPostWithThumbnail.args = {
  title: '썸네일 있는 게시물 제목 예시입니다.',
  likeCount: 5,
  thumbnail:
    'https://image.shutterstock.com/image-photo/father-tying-his-sons-shoelaces-260nw-1306340755.jpg',
  categories: [
    { id: 1, name: '자바스크립트' },
    { id: 2, name: '타입스크립트' },
    { id: 3, name: '색조합사이트' },
    { id: 4, name: '개꿀맛음식' },
    { id: 5, name: '개꿀맛음식' },
  ],
};

export const ExperimentPostWithNoThumbnail = CardTemplate.bind({});
ExperimentPostWithNoThumbnail.args = {
  title: '썸네일 없는 실험 게시물 제목 예시입니다.',
  likeCount: 10,
  thumbnail: undefined,
  categories: [
    { id: 1, name: '치킨' },
    { id: 2, name: '피자' },
    { id: 3, name: '개꿀맛음식' },
  ],
};
