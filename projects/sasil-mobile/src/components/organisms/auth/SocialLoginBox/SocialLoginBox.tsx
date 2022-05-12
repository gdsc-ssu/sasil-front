import {
  AppleLoginButton,
  GoogleLoginButton,
  KakaoLoginButton,
} from '@/components/molecule/LoginButton/social';
import * as styled from './SocialLoginBox.style';

/**
 * 소셜 로그인 버튼이 정렬되어있는 컴포넌트
 */
const SocialLoginBox = () => (
  <styled.Container>
    <GoogleLoginButton />
    <AppleLoginButton />
    <KakaoLoginButton />
  </styled.Container>
);

export default SocialLoginBox;
