import React, { useState } from 'react';
import { Modal } from 'react-native';
import LoginButton from '../LoginButton';
import KakaoWebView from './KakaoWebView';

// Kakao 로그인 버튼 컴포넌트
const KakaoLoginButton = () => {
  const [webViewVisible, setWebViewVisible] = useState(false);
  return (
    <>
      <Modal animationType="slide" transparent visible={webViewVisible}>
        <KakaoWebView closeWebView={() => setWebViewVisible(false)} />
      </Modal>
      <LoginButton social="kakao" onPress={() => setWebViewVisible(true)} />
    </>
  );
};

export default KakaoLoginButton;
