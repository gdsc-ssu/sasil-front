import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SocialLoginBox from '@/components/organisms/login/SocialLoginBox';
import * as styles from './LoginModal.style';

/**
 * 로그인 screen 에서 자동으로 보여지는 로그인 Modal 컴포넌트
 */
const LoginModal = () => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();

  return (
    <styles.Background>
      <styles.CloseArea onPress={() => navigation.goBack()} />
      <SocialLoginBox bottomInset={bottom} />
    </styles.Background>
  );
};

export default LoginModal;
