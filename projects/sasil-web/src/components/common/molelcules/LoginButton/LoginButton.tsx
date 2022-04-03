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

type SocialTheme = {
  [key in Social]: {
    label: string;
    backgroundColor: string;
    color: string;
    logo: ReactElement;
  };
};

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

export interface LoginButtonProps {
  social: Social;
  onClick: () => void;
}

const LoginButton = ({ social, onClick }: LoginButtonProps) => (
  <styles.Button
    backgroundColor={socialTheme[social].backgroundColor}
    onClick={onClick}
  >
    <styles.iconWrap>{socialTheme[social].logo}</styles.iconWrap>
    <styles.labelWrap>
      <StyledText
        color={socialTheme[social].color}
        textStyleName={TEXT_STYLE_NAME.button2B}
      >
        {socialTheme[social].label}
      </StyledText>
    </styles.labelWrap>
  </styles.Button>
);

export default LoginButton;
