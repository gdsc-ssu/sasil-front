import { useMemo } from 'react';
import WebView from 'react-native-webview';
import { useRoute, useNavigation } from '@react-navigation/native';
import { COLORS } from '@sasil/common';
import { useAtom } from 'jotai';
import { tokenAtom } from '@/logics/store/atoms';
import TopBar from '@/components/molecule/TopBar';
import * as styles from './PostWriteScreen.style';

const PostWriteScreen = () => {
  const [token] = useAtom(tokenAtom);
  const route = useRoute();
  const navigation = useNavigation();

  const tokenJs = useMemo(
    () =>
      `(function(){
        let token = window.localStorage.getItem('accessToken');
        if(!token || (token && token != '"${token}"')) {
          window.localStorage.setItem('accessToken', '"${token}"');
          window.location.reload();
        }
      })();`,
    [token],
  );

  return (
    <styles.Container>
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
