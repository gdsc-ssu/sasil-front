import React from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';
import { getUser, loginAsync } from '@sasil/common';
import { tokenAtom } from '@/logics/store/atoms';
import { createUserInfoAtom } from '@/logics/store/actions';
import { useAtom } from 'jotai';
import LoginButton from '../LoginButton';

// Apple 로그인 버튼 컴포넌트
const AppleLoginButton = () => {
  // UserInfo Update Action
  const [, setUserInfo] = useAtom(createUserInfoAtom);
  const [, setToken] = useAtom(tokenAtom);

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

      if (authValue === null) {
        alert('어쩌구');
        return;
      }

      const res = await loginAsync('apple-mobile', authValue);

      if (res.isSuccess) {
        const { token } = res.result;
        setToken(token);
        const userData = await getUser(token);

        if (userData.isSuccess) {
          setUserInfo(userData.result);
        } else alert(userData.result.errorMessage);
      } else alert(res.result.errorMessage);
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
