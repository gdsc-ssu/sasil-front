import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COLORS } from '@sasil/common';
import WriterInfo, { WriterInfoProps } from '.';

export default {
  title: 'components/common/molecule/WriterInfo',
  component: WriterInfo,
} as ComponentMeta<typeof WriterInfo>;

const Template: ComponentStory<typeof WriterInfo> = ({
  writerObj,
  textColor,
  use,
}: WriterInfoProps) => (
  <WriterInfo writerObj={writerObj} textColor={textColor} use={use} />
);

export const PostMini = Template.bind({});
PostMini.args = {
  writerObj: {
    nickname: '작성자',
    profileImg: null,
  },
  textColor: COLORS.grayscale.black,
  use: 'post-card',
};

export const PostDetail = Template.bind({});
PostDetail.args = {
  writerObj: {
    nickname: '작성자',
    profileImg: null,
  },
  textColor: COLORS.grayscale.black,
  use: 'post-detail',
};
