import React from 'react';
import { Modal } from 'react-native';
import { AuthSessionResult } from 'expo-auth-session';
import AuthTemplate from '@/components/templates/auth/AuthTemplate';
import * as styles from './LoginModal.style';
import KakaoWebView from './KakaoWebView';

interface LoginModalProps {
  appleLogin: () => Promise<void>;
  kakaoLogin: () => void;
  googleLogin: () => Promise<AuthSessionResult>;
  closeWebView: () => void;
  loginModalVisible: boolean;
  webviewModalVisible: boolean;
}

/**
 * 로그인 screen 에서 자동으로 보여지는 로그인 Modal 컴포넌트
 *
 * @param appleLogin : apple 로그인 로직 함수
 * @param kakaoLogin : kakao 로그인 로직 함수
 * @param googleLogin : google 로그인 로직 함수
 * @param loginModalVisible : Login modal 팝업 여부
 * @param webviewModalVisible : kakao webview 를 담은 modal 팝업 여부
 * @param closeWebView : kakao webview를 닫는 함수
 */
const LoginModal = ({
  appleLogin,
  kakaoLogin,
  googleLogin,
  loginModalVisible,
  webviewModalVisible,
  closeWebView,
}: LoginModalProps) => (
  <styles.Background>
    <Modal animationType="slide" transparent visible={webviewModalVisible}>
      <KakaoWebView closeWebView={closeWebView} />
    </Modal>
    <Modal animationType="slide" transparent visible={loginModalVisible}>
      <styles.ModalContent>
        <AuthTemplate
          kakaoLogin={kakaoLogin}
          appleLogin={appleLogin}
          googleLogin={googleLogin}
        />
      </styles.ModalContent>
    </Modal>
  </styles.Background>
);

export default LoginModal;
