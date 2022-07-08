import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { interestsInfo } from 'src/dummyData';
import InterestsWrap, { InterestsWrapProps } from '.';

export default {
  title: 'components/organism/InterestsWrap',
  component: InterestsWrap,
} as ComponentMeta<typeof InterestsWrap>;

const Template: ComponentStory<typeof InterestsWrap> = ({
  likeInfo,
  bookmarkInfo,
}: InterestsWrapProps) => (
  <InterestsWrap likeInfo={likeInfo} bookmarkInfo={bookmarkInfo} />
);

export const Default = Template.bind({});
Default.args = {
  likeInfo: interestsInfo.likeInfo,
  bookmarkInfo: interestsInfo.bookmarkInfo,
};
