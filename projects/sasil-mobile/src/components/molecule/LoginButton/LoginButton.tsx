import React from 'react';
import StyledText from '@/components/atom/StyledText';

import AppleLogo from '@/assets/icons/AppleLogo';
import KakaoLogo from '@/assets/icons/KakaoLogo';
import GoogleLogo from '@/assets/icons/GoogleLogo';

import { TEXT_STYLE_NAME } from '@sasil/common';
import * as styles from './LoginButton.style';

export const SOCIAL = {
  kakao: 'kakao',
  apple: 'apple',
  google: 'google',
} as const;
export type Social = typeof SOCIAL[keyof typeof SOCIAL];

/* eslint-disable no-undef */
type SocialTheme = {
  [key in Social]: {
    label: string;
    backgroundColor: string;
    color: string;
    logo: JSX.Element;
  };
};

// 각 소셜의 버튼 스타일, 로고 등 정보를 가지고 있는 객체
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
  onPress: () => void;
}

/**
 * 로그인 버튼을 생성하는 컴포넌트
 *
 * @param social : 소셜 로그인 종류. apple, kakao, google 중 하나.
 * @param onPress : 버튼 누르면 실행될 함수
 */
const LoginButton = ({ social, onPress }: LoginButtonProps) => (
  <styles.Button
    backgroundColor={themes[social].backgroundColor}
    onPress={onPress}
  >
    <styles.iconWrap>{themes[social].logo}</styles.iconWrap>
    <styles.labelWrap>
      <StyledText
        color={themes[social].color}
        textStyleName={TEXT_STYLE_NAME.button2B}
      >
        {themes[social].label}
      </StyledText>
    </styles.labelWrap>
  </styles.Button>
);

export default LoginButton;
