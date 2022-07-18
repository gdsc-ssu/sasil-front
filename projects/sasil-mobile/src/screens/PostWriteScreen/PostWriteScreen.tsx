import { useMemo } from 'react';
import WebView from 'react-native-webview';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { COLORS } from '@sasil/common';
import { useAtom } from 'jotai';
import { userInfoAtom } from '@/logics/store/atoms';
import TopBar from '@/components/molecule/TopBar';
import * as styles from './PostWriteScreen.style';

const PostWriteScreen = () => {
  const [userInfo] = useAtom(userInfoAtom);
  const route = useRoute();
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();

  // TODO: 테스트 필요
  const tokenJs = useMemo(
    () =>
      `(function(){
        const savedData = window.localStorage.getItem('userInfo');
        let userInfo = JSON.parse(savedData)
        if(!userInfo || (userInfo.token && userInfo.token != '${userInfo.token}')) {
          const toJson = JSON.stringify(${userInfo});
          window.localStorage.setItem('userInfo', toJson);
          window.location.reload();
        }
      })();`,
    [userInfo],
  );

  return (
    <styles.Container bottomInset={bottom}>
      <TopBar
        backgroundColor={COLORS.grayscale.white}
        onBackPress={() => navigation.goBack()}
      />
      <WebView
        style={styles.webView}
        source={{
          uri: `https://sasil.app/write/${route.params.type}`,
        }}
        injectedJavaScriptBeforeContentLoaded={tokenJs}
        javaScriptEnabled
        domStorageEnabled
      />
    </styles.Container>
  );
};

export default PostWriteScreen;
