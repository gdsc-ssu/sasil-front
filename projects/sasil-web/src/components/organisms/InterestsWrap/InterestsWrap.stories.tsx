import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InterestsWrap, { InterestsWrapProps } from '.';

export default {
  title: 'components/organism/InterestsWrap',
  component: InterestsWrap,
} as ComponentMeta<typeof InterestsWrap>;

const Template: ComponentStory<typeof InterestsWrap> = ({
  likeCount,
  bookmarkCount,
  isLike,
  isBookmark,
}: InterestsWrapProps) => (
  <InterestsWrap
    likeCount={likeCount}
    bookmarkCount={bookmarkCount}
    isLike={isLike}
    isBookmark={isBookmark}
  />
);

export const Default = Template.bind({});
Default.args = {
  likeCount: 10,
  bookmarkCount: 10,
  isLike: true,
  isBookmark: false,
};
