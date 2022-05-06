import SocialLoginBox from '@/components/organisms/auth/SocialLoginBox';
import React from 'react';
import * as styles from './AuthTemplate.style';

type AuthTemplateProps = {
  appleLogin: () => Promise<void>;
  kakaoLogin: () => void;
  googleLogin: () => void;
};

/**
 * 로그인 로직을 제외한, 로그인 Form과 레이아웃이 적용되어있는 Template 컴포넌트
 *
 * @param appleLogin : Wrapped 컴포넌트로부터 전달받는 Apple 로그인 로직 함수
 * @param kakaoLogin : Wrapped 컴포넌트로부터 전달받는 Kakao 로그인 로직 함수
 * @param googleLogin : Wrapped 컴포넌트로부터 전달받는 Google 로그인 로직 함수
 */
const AuthTemplate = ({
  appleLogin,
  kakaoLogin,
  googleLogin,
}: AuthTemplateProps) => (
  <styles.Container>
    <SocialLoginBox
      appleLogin={appleLogin}
      kakaoLogin={kakaoLogin}
      googleLogin={googleLogin}
    />
  </styles.Container>
);

export default AuthTemplate;
