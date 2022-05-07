import LoginButton from '@/components/molelcules/LoginButton';
import SasilLogo from '@/assets/icons/SasilLogo.svg';

import * as styles from './SocialLoginBox.style';

export type SocialLoginBoxProps = {
  appleLogin: () => Promise<void>;
  kakaoLogin: () => void;
  googleLogin: () => void;
};

/**
 * sasil 로고와 소셜 로그인 버튼들로 구성되어 있는 Organisms 컴포넌트
 *
 * @param appleLogin : apple 로그인 버튼 클릭 시 실행할 함수
 * @param kakaoLogin : kakao 로그인 버튼 클릭 시 실행할 함수
 * @param googleLogin : google 로그인 버튼 클릭 시 실행할 함수
 */
const SocialLoginBox = ({
  appleLogin,
  kakaoLogin,
  googleLogin,
}: SocialLoginBoxProps) => (
  <styles.Container>
    <styles.IconWrap>
      <SasilLogo width="110" height="110" />
    </styles.IconWrap>
    <LoginButton social="google" onClick={googleLogin} />
    <LoginButton social="apple" onClick={appleLogin} />
    <LoginButton social="kakao" onClick={kakaoLogin} />
  </styles.Container>
);

export default SocialLoginBox;
