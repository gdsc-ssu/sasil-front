import { useMemo } from 'react';
import WebView from 'react-native-webview';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { COLORS } from '@sasil/common';
import { useAtom } from 'jotai';
import { tokenAtom } from '@/logics/store/atoms';
import TopBar from '@/components/molecule/TopBar';
import * as styles from './PostDetailScreen.style';

const PostDetailScreen = () => {
  const [token] = useAtom(tokenAtom);
  const route = useRoute();
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();

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
    <styles.Container bottomInset={bottom}>
      <TopBar
        backgroundColor={COLORS.grayscale.white}
        onBackPress={() => navigation.goBack()}
      />
      <WebView
        style={styles.webView}
        source={{
          uri: `https://sasil.app/post/${route.params.type}/${route.params.id}`,
        }}
        injectedJavaScriptBeforeContentLoaded={tokenJs}
        javaScriptEnabled
        domStorageEnabled
      />
    </styles.Container>
  );
};

export default PostDetailScreen;
