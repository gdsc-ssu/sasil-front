import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import Interest, { InterestProps } from '.';

export default {
  title: 'components/molecule/Interest',
  component: Interest,
} as ComponentMeta<typeof Interest>;

const Template: ComponentStory<typeof Interest> = ({
  type,
  pressed,
  count,
  color,
  size,
  textStyleName,
}: InterestProps) => (
  <Interest
    type={type}
    pressed={pressed}
    count={count}
    color={color}
    size={size}
    textStyleName={textStyleName}
  />
);

export const LikeForPostCard = Template.bind({});
LikeForPostCard.args = {
  type: 'like',
  pressed: true,
  count: 10,
  color: COLORS.primary.normal,
  size: 16,
  textStyleName: TEXT_STYLE_NAME.body3,
};

export const LikeForWebContent = Template.bind({});
LikeForWebContent.args = {
  type: 'like',
  pressed: true,
  count: 10,
  color: COLORS.primary.normal,
  size: 25,
  textStyleName: TEXT_STYLE_NAME.body2R,
};

export const BookmarkForSummary = Template.bind({});
BookmarkForSummary.args = {
  type: 'bookmark',
  pressed: false,
  count: 10,
  color: COLORS.primary.normal,
  size: 16,
  textStyleName: TEXT_STYLE_NAME.body3,
};
