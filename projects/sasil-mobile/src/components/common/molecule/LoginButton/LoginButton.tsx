/* eslint-disable no-undef */
import React from 'react';
import StyledText from '@/components/common/atom/StyledText';

import AppleLogo from '@/assets/icons/AppleLogo';
import KakaoLogo from '@/assets/icons/KakaoLogo';
import GoogleLogo from '@/assets/icons/GoogleLogo';

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
    logo: JSX.Element;
  };
};

const themes: SocialTheme = {
  kakao: {
    label: '카카오 로그인',
    backgroundColor: '#FEE500',
    color: '#000',
    logo: <KakaoLogo />,
  },
  apple: {
    label: 'Apple로 계속하기',
    backgroundColor: '#0a0a0a',
    color: '#fff',
    logo: <AppleLogo />,
  },
  google: {
    label: 'Google로 계속하기',
    backgroundColor: '#fff',
    color: '#000',
    logo: <GoogleLogo />,
  },
};

interface LoginButtonProps {
  social: Social;
}

const LoginButton = ({ social }: LoginButtonProps) => (
  <styles.Button
    backgroundColor={themes[social].backgroundColor}
    // onPress={onPress}
  >
    <styles.iconWrap>{themes[social].logo}</styles.iconWrap>
    <styles.labelWrap>
      <StyledText color={themes[social].color}>
        {themes[social].label}
      </StyledText>
    </styles.labelWrap>
  </styles.Button>
);

export default LoginButton;
