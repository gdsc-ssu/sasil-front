import React from 'react';
import { Modal } from 'react-native';
import SocialLoginBox from '@/components/organisms/auth/SocialLoginBox';
import * as styles from './LoginModal.style';

/**
 * 로그인 screen 에서 자동으로 보여지는 로그인 Modal 컴포넌트
 */
const LoginModal = () => (
  <styles.Background>
    <Modal animationType="slide" transparent>
      <styles.ModalContent>
        <SocialLoginBox />
      </styles.ModalContent>
    </Modal>
  </styles.Background>
);

export default LoginModal;
