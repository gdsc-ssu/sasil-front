import {
  AppleLoginButton,
  GoogleLoginButton,
  KakaoLoginButton,
} from '@/components/molecule/LoginButton/social';
import * as styled from './SocialLoginBox.style';

interface SocialLoginBoxProps {
  bottomInset?: number;
}

/**
 * 소셜 로그인 버튼이 정렬되어있는 컴포넌트
 */
const SocialLoginBox = ({ bottomInset }: SocialLoginBoxProps) => (
  <styled.Container bottomInset={bottomInset}>
    <GoogleLoginButton />
    <AppleLoginButton />
    <KakaoLoginButton />
  </styled.Container>
);

export default SocialLoginBox;
