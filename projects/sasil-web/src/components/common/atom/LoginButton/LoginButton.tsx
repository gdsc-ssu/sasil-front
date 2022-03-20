import React from 'react';

import Button from './LoginButton.style';

interface socialThemesType {
  [key: string]: {
    label: string;
    border: string;
    backgroundColor: string;
    color: string;
  };
}

interface LoginButtonProps {
  social: string;
}

const socialStyle: socialThemesType = {
  kakao: {
    label: '카카오 로그인',
    border: 'none',
    backgroundColor: '#FEE500',
    color: '#000',
  },
  apple: {
    label: 'Apple로 계속하기',
    border: 'none',
    backgroundColor: '#0a0a0a',
    color: '#fff',
  },
  google: {
    label: 'Google로 계속하기',
    border: '1px solid #000',
    backgroundColor: '#fff',
    color: '000',
  },
};

const LoginButton = ({ social }: LoginButtonProps) => (
  <Button
    backgroundColor={socialStyle[social].backgroundColor}
    border={socialStyle[social].border}
    color={socialStyle[social].color}
  >
    {socialStyle[social].label}
  </Button>
);

export default LoginButton;
