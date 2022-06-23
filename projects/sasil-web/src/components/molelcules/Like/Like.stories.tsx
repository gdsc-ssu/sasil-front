import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COLORS } from '@sasil/common';
import Like, { LikeProps } from '.';

export default {
  title: 'components/molecule/Like',
  component: Like,
} as ComponentMeta<typeof Like>;

const Template: ComponentStory<typeof Like> = ({
  likeCount,
  color,
}: LikeProps) => <Like likeCount={likeCount} color={color} />;

export const Default = Template.bind({});
Default.args = {
  likeCount: 10,
  color: COLORS.primary.normal,
};
