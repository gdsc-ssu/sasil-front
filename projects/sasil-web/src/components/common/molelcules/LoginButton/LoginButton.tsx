import React, { ReactElement } from 'react';

import AppleLogo from '@/assets/icons/AppleLogo.svg';
import GoogleLogo from '@/assets/icons/GoogleLogo.svg';
import KakaoLogo from '@/assets/icons/KakaoLogo.svg';

import { TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import * as styles from './LoginButton.style';
import StyledText from '../../atoms/StyledText/StyledText';

export const SOCIAL = {
  kakao: 'kakao',
  apple: 'apple',
  google: 'google',
} as const;
export type Social = typeof SOCIAL[keyof typeof SOCIAL];

type Themes = {
  [key in Social]: {
    label: string;
    backgroundColor: string;
    color: string;
    logo: ReactElement;
    border?: string;
  };
};

const themes: Themes = {
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
    color: '#000',
    logo: <GoogleLogo width="18" />,
    border: '1px solid #E0E0E0',
  },
};

export interface LoginButtonProps {
  social: Social;
  onClick: () => void;
}

const LoginButton = ({ social, onClick }: LoginButtonProps) => (
  <styles.Button
    backgroundColor={themes[social].backgroundColor}
    border={themes[social].border}
    onClick={onClick}
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
