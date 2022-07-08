import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '@sasil/common';
import LoginButton from '../LoginButton';
import KakaoWebView from './KakaoWebView';
import TopBar from '../../TopBar';

// Kakao 로그인 버튼 컴포넌트
const KakaoLoginButton = () => {
  const { top, bottom } = useSafeAreaInsets();

  const [webViewVisible, setWebViewVisible] = useState(false);

  return (
    <>
      <Modal animationType="slide" transparent visible={webViewVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.grayscale.white,
            marginTop: top,
            paddingBottom: bottom,
          }}
        >
          <TopBar
            backgroundColor={COLORS.grayscale.white}
            onBackPress={() => setWebViewVisible(false)}
          />
          <KakaoWebView closeWebView={() => setWebViewVisible(false)} />
        </View>
      </Modal>
      <LoginButton social="kakao" onPress={() => setWebViewVisible(true)} />
    </>
  );
};

export default KakaoLoginButton;
