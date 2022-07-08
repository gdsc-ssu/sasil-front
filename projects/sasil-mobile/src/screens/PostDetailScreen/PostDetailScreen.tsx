import { useMemo } from 'react';
import WebView from 'react-native-webview';
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

  const tokenJs = useMemo(
    () => `window.localStorage.setItem('accessToken', '${token}');`,
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
          uri: `https://sasil-front-tsxu1cfxu-sasil.vercel.app/post/${route.params.type}/${route.params.id}`,
        }}
        injectedJavaScript={tokenJs}
      />
    </styles.Container>
  );
};

export default PostDetailScreen;
