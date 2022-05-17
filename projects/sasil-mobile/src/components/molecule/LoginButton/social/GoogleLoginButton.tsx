import React, { useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { googleClientId } from '@sasil/common';
import { ResponseType } from 'expo-auth-session';
import { useAtom } from 'jotai';
import { createUserInfoAtom } from '@/logics/store/actions';
import LoginButton from '../LoginButton';
import { getUser, login } from './route';

// Google 로그인 버튼 컴포넌트
const GoogleLoginButton = () => {
  // UserInfo Update Action
  const [, setUserInfo] = useAtom(createUserInfoAtom);

  const [req, resp, promptAsync] = Google.useAuthRequest({
    expoClientId: googleClientId.expo,
    iosClientId: googleClientId.ios,
    responseType: ResponseType.IdToken,
  });

  // TODO : login API 연결 !!
  const responseGoogle = async (response: any) => {
    if (response?.type === 'success') {
      const { id_token: idToken } = response.params;
      const res = await login(idToken, 'google-mobile');
      const token = res?.data.token;
      const userData = await getUser(token);
      setUserInfo(userData);
    }
  };

  useEffect(() => {
    responseGoogle(resp);
  }, [resp]);

  return <LoginButton social="google" onPress={() => promptAsync()} />;
};

export default GoogleLoginButton;
