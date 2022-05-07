import React, { useState, useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';
import { ResponseType } from 'expo-auth-session';
import LoginModal from './LoginModal';

const expoClientId =
  '1039863031545-6s4895k6lu3qoo5ndnhjm4vk9dkonkss.apps.googleusercontent.com';
// const androidClientId =
//   '429457146313-mq693iuckrp5spudm138g1rnntgnjjt4.apps.googleusercontent.com';
const iosClientId =
  '1039863031545-4in5ljvaephst13ridnjtqm32ododsho.apps.googleusercontent.com';

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
    // androidClientId,
    iosClientId,
    responseType: ResponseType.IdToken,
  });
  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token: idToken } = response.params;
      // TODO : 로그인 API에 id_token 전달해서 유저 정보 가지고 와야한다!
      console.log(idToken);
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
