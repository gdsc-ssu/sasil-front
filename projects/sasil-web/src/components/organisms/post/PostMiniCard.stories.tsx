import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as Post from '.';

export default {
  title: 'components/organism/post/MiniCard',
  component: Post.MiniCard,
} as ComponentMeta<typeof Post.MiniCard>;

const RequestTemplate: ComponentStory<typeof Post.MiniCard> = ({
  title,
  likeCount,
}: Post.MiniCardProps) => (
  <Post.MiniCard type="request" title={title} likeCount={likeCount} />
);

export const RequestPost = RequestTemplate.bind({});
RequestPost.args = {
  title: '의뢰 게시물 제목 예시입니다.',
  likeCount: 925,
};

const ExperimentTemplate: ComponentStory<typeof Post.MiniCard> = ({
  title,
  likeCount,
  writerObj,
  thumbnail,
}: Post.MiniCardProps) => (
  <Post.MiniCard
    type="experiment"
    title={title}
    likeCount={likeCount}
    writerObj={writerObj}
    thumbnail={thumbnail}
  />
);

export const ExperimentPostWithThumbnail = ExperimentTemplate.bind({});
ExperimentPostWithThumbnail.args = {
  title: '썸네일 있는 실험 게시물 제목 예시입니다.',
  likeCount: 5,
  writerObj: {
    id: 1,
    nickname: '작성자',
    profileImg:
      'https://image.shutterstock.com/image-photo/darkeyed-girl-pink-makeup-chewing-600w-1457328599.jpg',
  },
  thumbnail:
    'https://image.shutterstock.com/image-photo/father-tying-his-sons-shoelaces-260nw-1306340755.jpg',
};

export const ExperimentPostWithNoThumbnail = ExperimentTemplate.bind({});
ExperimentPostWithNoThumbnail.args = {
  title: '썸네일 없는 실험 게시물 제목 예시입니다.',
  likeCount: 10,
  writerObj: {
    id: 2,
    nickname: '작성자',
    profileImg:
      'https://image.shutterstock.com/image-photo/darkeyed-girl-pink-makeup-chewing-600w-1457328599.jpg',
  },
  thumbnail: undefined,
};
