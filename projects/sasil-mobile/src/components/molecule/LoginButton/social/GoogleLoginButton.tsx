import React, { useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { googleClientId } from '@sasil/common';
import { ResponseType } from 'expo-auth-session';
import LoginButton from '../LoginButton';

// Google 로그인 버튼 컴포넌트
const GoogleLoginButton = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: googleClientId.expo,
    iosClientId: googleClientId.ios,
    responseType: ResponseType.IdToken,
  });
  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token: idToken } = response.params;
      console.log(idToken);
      // TODO: login API 연결 !!
    }
  }, [response]);
  return <LoginButton social="google" onPress={() => promptAsync()} />;
};

export default GoogleLoginButton;
