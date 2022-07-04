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
  liked,
  bookmarked,
}: InterestsWrapProps) => (
  <InterestsWrap
    likeCount={likeCount}
    bookmarkCount={bookmarkCount}
    liked={liked}
    bookmarked={bookmarked}
  />
);

export const Default = Template.bind({});
Default.args = {
  likeCount: 10,
  bookmarkCount: 10,
  liked: true,
  bookmarked: false,
};
