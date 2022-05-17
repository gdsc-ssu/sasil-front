import React, { useEffect, useCallback } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { googleClientId, getUser, loginAsync, LOGIN_TYPE } from '@sasil/common';
import { ResponseType, AuthSessionResult } from 'expo-auth-session';
import { useAtom } from 'jotai';
import { createUserInfoAtom } from '@/logics/store/actions';
import LoginButton from '../LoginButton';

// Google 로그인 버튼 컴포넌트
const GoogleLoginButton = () => {
  // UserInfo Update Action
  const [, setUserInfo] = useAtom(createUserInfoAtom);

  const [req, resp, promptAsync] = Google.useAuthRequest({
    expoClientId: googleClientId.expo,
    iosClientId: googleClientId.ios,
    responseType: ResponseType.IdToken,
  });

  const responseGoogle = useCallback(
    async (response: AuthSessionResult | null) => {
      if (response?.type === 'success') {
        const { id_token: idToken } = response.params;
        const res = await loginAsync(LOGIN_TYPE.googleWeb, idToken);

        if (res.isSuccess) {
          const userData = await getUser(res.result.token);

          if (userData.isSuccess) {
            setUserInfo(userData.result);
          }
        }
      }
    },
    [setUserInfo],
  );

  useEffect(() => {
    responseGoogle(resp);
  }, [resp, responseGoogle]);

  return <LoginButton social="google" onPress={() => promptAsync()} />;
};

export default GoogleLoginButton;
