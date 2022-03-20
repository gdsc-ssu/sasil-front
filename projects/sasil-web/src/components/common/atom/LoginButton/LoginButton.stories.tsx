import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginButton from './LoginButton';

interface LoginButtonProps {
  social: string;
}

export default {
  title: 'components/common/atom/LoginButton',
  component: LoginButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { defaultValue: 'Button' },
  },
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = ({
  social,
}: LoginButtonProps) => <LoginButton social={social} />;

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
