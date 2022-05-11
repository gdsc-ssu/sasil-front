import { appleClientId, appleRedirectURI } from '@sasil/common';
import { useEffect } from 'react';
import { login, getUser } from '../routes';
import LoginButton from '../LoginButton';

/**
 * Apple 로그인의 nonce를 위해 주어질 길이만큼 임의의 문자열을 생성하는 함수
 *
 * @param length : 임의로 생성할 문자열의 길이
 */
const generateNonce = (length: number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.random() * charactersLength);
  }
  return result;
};

/**
 * Apple 토큰으로 JWT 토큰을 받고 이를 통해 유저 정보 불러오는 함수
 *
 * @param authValue : Apple 로부터 받은 토큰
 */
// TODO : login API 연결 !!
const responseApple = async (authValue: string) => {
  const res = await login(authValue, 'apple-web');
  const token = res?.data.token;
  const userData = await getUser(token);
  console.log(userData);
};

// Apple 로그인 함수 : 애플 로그인 창이 열린 후, 로그인 성공시 유저 데이터를 받아오는 로직 실행
const loginWithApple = async () => {
  try {
    const { AppleID }: any = window;
    const data = await AppleID.auth.signIn();
    if (data) {
      const authValue = data.authorization.code;
      const result = await responseApple(authValue);
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
};

// Apple 로그인 버튼 컴포넌트
const AppleLoginButton = () => {
  useEffect(() => {
    const { AppleID }: any = window;
    AppleID.auth.init({
      clientId: appleClientId,
      scope: 'name email',
      redirectURI: appleRedirectURI,
      state: 'signin',
      nonce: generateNonce(16),
      usePopup: true,
    });
  }, []);
  return <LoginButton social="apple" onClick={loginWithApple} />;
};

export default AppleLoginButton;
