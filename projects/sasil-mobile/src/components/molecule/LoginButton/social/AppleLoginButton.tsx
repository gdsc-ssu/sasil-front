import React from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';
import { getUser } from '@sasil/common';
import { createUserInfoAtom } from '@/logics/store/actions';
import { useAtom } from 'jotai';
import LoginButton from '../LoginButton';
import { login } from './route';

// Apple 로그인 버튼 컴포넌트
const AppleLoginButton = () => {
  // UserInfo Update Action
  const [, setUserInfo] = useAtom(createUserInfoAtom);

  /**
   * Apple 토큰으로 JWT 토큰을 받고 이를 통해 유저 정보 불러오는 함수
   *
   * @param authValue : Apple 로부터 받은 토큰
   */
  // TODO : login API 연결 !!
  const responseApple = async (authValue: string) => {
    const res = await login(authValue, 'apple-mobile');
    const token = res?.data.token;
    const userData = await getUser(token);
    return userData;
  };

  // Apple 로그인 성공시 유저 정보 받아온 후 userInfo atom에 넣어주는 함수
  const loginWithApple = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      const authValue = credential.authorizationCode;
      const result = authValue && (await responseApple(authValue));
      setUserInfo(result);
    } catch (error: any) {
      if (error.code === 'ERR_CANCELED') {
        // handle that the user canceled the sign-in flow
        console.log(error);
      } else {
        // handle other errors
        console.log(error);
      }
    }
  };

  return <LoginButton social="apple" onPress={loginWithApple} />;
};

export default AppleLoginButton;
