import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import WriterInfo, { WriterInfoProps } from '.';

export default {
  title: 'components/molecule/WriterInfo',
  component: WriterInfo,
} as ComponentMeta<typeof WriterInfo>;

const Template: ComponentStory<typeof WriterInfo> = ({
  writerObj,
  textColor,
  textStyleName,
  profileSize,
}: WriterInfoProps) => (
  <WriterInfo
    writerObj={writerObj}
    textColor={textColor}
    textStyleName={textStyleName}
    profileSize={profileSize}
  />
);

export const InPostMini = Template.bind({});
InPostMini.args = {
  writerObj: {
    nickname: '작성자',
    profileImg: null,
  },
  textColor: COLORS.grayscale.black,
  textStyleName: TEXT_STYLE_NAME.body3,
  profileSize: 14,
};

export const InPostDetail = Template.bind({});
InPostDetail.args = {
  writerObj: {
    nickname: '작성자',
    profileImg: null,
  },
  textColor: COLORS.grayscale.black,
  textStyleName: TEXT_STYLE_NAME.body2R,
  profileSize: 20,
};
