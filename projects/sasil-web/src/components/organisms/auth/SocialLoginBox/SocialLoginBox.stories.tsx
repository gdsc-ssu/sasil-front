import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SocialLoginBox, { SocialLoginBoxProps } from './SocialLoginBox';

export default {
  title: 'components/organisms/auth/SocialLoginBox',
  componenet: SocialLoginBox,
} as ComponentMeta<typeof SocialLoginBox>;

const Template: ComponentStory<typeof SocialLoginBox> = ({
  appleLogin,
  kakaoLogin,
  googleLogin,
}: SocialLoginBoxProps) => (
  <SocialLoginBox
    appleLogin={appleLogin}
    kakaoLogin={kakaoLogin}
    googleLogin={googleLogin}
  />
);

export const Default = Template.bind({});
