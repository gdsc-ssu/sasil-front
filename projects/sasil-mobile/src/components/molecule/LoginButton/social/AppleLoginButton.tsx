import React from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';
import LoginButton from '../LoginButton';

// TODO: login API 연결 !!
const loginWithApple = async () => {
  try {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    });
    console.log(credential);
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

// Apple 로그인 버튼 컴포넌트
const AppleLoginButton = () => (
  <LoginButton social="apple" onPress={loginWithApple} />
);

export default AppleLoginButton;
