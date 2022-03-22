import React, { ReactElement } from 'react';

import AppleLogo from '@/assets/icons/AppleLogo.svg';
import GoogleLogo from '@/assets/icons/GoogleLogo.svg';
import KakaoLogo from '@/assets/icons/KakaoLogo.svg';

import * as styles from './LoginButton.style';

export const SOCIAL = {
  kakao: 'kakao',
  apple: 'apple',
  google: 'google',
} as const;
export type Social = typeof SOCIAL[keyof typeof SOCIAL];

type SocialTheme = {
  [key in Social]: {
    label: string;
    backgroundColor: string;
    color: string;
    logo: ReactElement;
  };
};
export interface LoginButtonProps {
  social: Social;
  onClick: () => void;
}

const socialTheme: SocialTheme = {
  kakao: {
    label: '카카오 로그인',
    backgroundColor: '#FEE500',
    color: '#000',
    logo: <KakaoLogo width="18" />,
  },
  apple: {
    label: 'Apple로 계속하기',
    backgroundColor: '#0a0a0a',
    color: '#fff',
    logo: <AppleLogo width="18" />,
  },
  google: {
    label: 'Google로 계속하기',
    backgroundColor: '#fff',
    color: '000',
    logo: <GoogleLogo width="18" />,
  },
};

const LoginButton = ({ social, onClick }: LoginButtonProps) => (
  <styles.Button
    backgroundColor={socialTheme[social].backgroundColor}
    color={socialTheme[social].color}
    onClick={onClick}
  >
    <styles.iconWrap>{socialTheme[social].logo}</styles.iconWrap>
    <styles.labelWrap>{socialTheme[social].label}</styles.labelWrap>
  </styles.Button>
);

export default LoginButton;
