import React, { useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { googleClientId } from '@sasil/common';
import { ResponseType } from 'expo-auth-session';
import LoginButton from '../LoginButton';
import { getUser, login } from './route';

// TODO : login API 연결 !!
const responseGoogle = async (response: any) => {
  if (response?.type === 'success') {
    const { id_token: idToken } = response.params;
    const res = await login(idToken, 'google-mobile');
    const token = res?.data.token;
    const user = await getUser(token);
    console.log(user);
  }
};

// Google 로그인 버튼 컴포넌트
const GoogleLoginButton = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: googleClientId.expo,
    iosClientId: googleClientId.ios,
    responseType: ResponseType.IdToken,
  });
  useEffect(() => {
    responseGoogle(response);
  }, [response]);
  return <LoginButton social="google" onPress={() => promptAsync()} />;
};

export default GoogleLoginButton;
