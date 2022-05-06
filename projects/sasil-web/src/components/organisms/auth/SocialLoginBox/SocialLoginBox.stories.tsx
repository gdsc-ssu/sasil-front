import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SocialLoginBox from '.';

export default {
  title: 'components/organisms/auth/SocialLoginBox',
  componenet: SocialLoginBox,
} as ComponentMeta<typeof SocialLoginBox>;

const Template: ComponentStory<typeof SocialLoginBox> = () => (
  <SocialLoginBox />
);

export const Default = Template.bind({});
