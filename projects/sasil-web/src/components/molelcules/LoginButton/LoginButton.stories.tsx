import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginButton, { LoginButtonProps } from './LoginButton';

export default {
  title: 'components/molecule/LoginButton',
  component: LoginButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = ({
  social,
  onClick,
}: LoginButtonProps) => <LoginButton social={social} onClick={onClick} />;

export const Kakao = Template.bind({});
Kakao.args = {
  social: 'kakao',
};

export const Apple = Template.bind({});
Apple.args = {
  social: 'apple',
};

export const Google = Template.bind({});
Google.args = {
  social: 'google',
};
