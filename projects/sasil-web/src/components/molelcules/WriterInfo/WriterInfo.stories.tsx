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
  writeDate,
}: WriterInfoProps) => (
  <WriterInfo
    writerObj={writerObj}
    textColor={textColor}
    textStyleName={textStyleName}
    profileSize={profileSize}
    writeDate={writeDate}
  />
);

export const InPostMini = Template.bind({});
InPostMini.args = {
  writerObj: {
    id: 1,
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
    id: 2,
    nickname: '작성자',
    profileImg: null,
  },
  textColor: COLORS.grayscale.black,
  textStyleName: TEXT_STYLE_NAME.body2R,
  profileSize: 20,
};

export const HaveWriteTime = Template.bind({});
HaveWriteTime.args = {
  writerObj: {
    id: 3,
    nickname: '작성자',
    profileImg: null,
  },
  textColor: COLORS.grayscale.black,
  textStyleName: TEXT_STYLE_NAME.body2R,
  profileSize: 20,
  writeDate: new Date('Sun Jul 03 2022 22:05:17 GMT+0900 (한국 표준시)'),
};
