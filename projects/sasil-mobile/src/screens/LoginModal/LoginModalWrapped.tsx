import React, { useState, useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';
import LoginModal from './LoginModal';

const expoClientId =
  '429457146313-ub1nukuklsknj8831etpgjvj845h7l16.apps.googleusercontent.com';
const androidClientId =
  '429457146313-mq693iuckrp5spudm138g1rnntgnjjt4.apps.googleusercontent.com';
const iosClientId =
  '429457146313-3cnac39f86l1osgo34jjoj468e3lgvth.apps.googleusercontent.com';

// TODO: Apple 로그인 요청 함수 -> 유저 데이터 가져오지 않음!
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

// Login Modal 컴포넌트에 로그인 로직을 전달하는 Wrapped 컴포넌트
const LoginModalWrapped = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(true);
  const [webViewModalVisible, setWebviewModalVisible] = useState(false);

  // Kakao Login
  const loginWithKakao = () => {
    setWebviewModalVisible(true);
    setLoginModalVisible(false);
  };

  // Google Login
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId,
    androidClientId,
    iosClientId,
  });
  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log(authentication);
    }
  }, [response]);

  return (
    <LoginModal
      appleLogin={loginWithApple}
      googleLogin={() => promptAsync()}
      kakaoLogin={loginWithKakao}
      loginModalVisible={loginModalVisible}
      webviewModalVisible={webViewModalVisible}
      closeWebView={() => setWebviewModalVisible(false)}
    />
  );
};

export default LoginModalWrapped;
