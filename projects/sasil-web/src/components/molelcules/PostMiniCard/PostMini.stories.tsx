import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostMiniCard, { PostMiniCardProps } from '.';

export default {
  title: 'components/common/molecule/PostMiniCard',
  component: PostMiniCard,
} as ComponentMeta<typeof PostMiniCard>;

const RequestTemplate: ComponentStory<typeof PostMiniCard> = ({
  title,
  likeCount,
}: PostMiniCardProps) => (
  <PostMiniCard type="request" title={title} likeCount={likeCount} />
);

export const RequestPost = RequestTemplate.bind({});
RequestPost.args = {
  title: '의뢰 게시물 제목 예시입니다.',
  likeCount: 925,
};

const ExperimentTemplate: ComponentStory<typeof PostMiniCard> = ({
  title,
  likeCount,
  writerObj,
  thumbnail,
}: PostMiniCardProps) => (
  <PostMiniCard
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
    nickname: '작성자',
    profileImg:
      'https://image.shutterstock.com/image-photo/darkeyed-girl-pink-makeup-chewing-600w-1457328599.jpg',
  },
  thumbnail: null,
};
