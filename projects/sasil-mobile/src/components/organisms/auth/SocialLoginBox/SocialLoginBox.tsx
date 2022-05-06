import LoginButton from '@/components/molecule/LoginButton';
import { AuthSessionResult } from 'expo-auth-session';
import * as styled from './SocialLoginBox.style';

type SocialLoginBoxProps = {
  kakaoLogin: () => void;
  appleLogin: () => Promise<void>;
  googleLogin: () => Promise<AuthSessionResult>;
};

/**
 * 소셜 로그인 버튼이 정렬되어있는 컴포넌트
 *
 * @param appleLogin : apple 로그인 버튼 클릭시 실행되는 함수
 * @param kakaoLogin : kakao 로그인 버튼 클릭시 실행되는 함수
 * @param googleLogin : google 로그인 버튼 클릭시 실행되는 함수
 */
const SocialLoginBox = ({
  kakaoLogin,
  appleLogin,
  googleLogin,
}: SocialLoginBoxProps) => (
  <styled.Container>
    <LoginButton social="google" onPress={googleLogin} />
    <LoginButton social="apple" onPress={appleLogin} />
    <LoginButton social="kakao" onPress={kakaoLogin} />
  </styled.Container>
);

export default SocialLoginBox;
