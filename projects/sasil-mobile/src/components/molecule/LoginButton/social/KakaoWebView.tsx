import styled from '@emotion/native';
import { kakaoClientId, kakaoRedirectURI } from '@sasil/common';
import axios from 'axios';
import { useAtom } from 'jotai';
import WebView from 'react-native-webview';
import { createUserInfoAtom } from '@/logics/store/actions';
import { login, getUser } from './route';

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const View = styled.SafeAreaView({
  flex: 1,
  backgroundColor: '#fff',
});

/**
 * accessCode 를 가지고 Kakao 토큰을 받는 함수
 *
 * @param code : Kakao accessCode
 */
const getKakaoToken = async (code: string) => {
  const response = await axios.post(
    `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&code=${code}&client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectURI}`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  return response;
};
/**
 * Kakao 토큰으로 JWT 토큰을 받고 이를 통해 유저 정보 불러오는 함수
 *
 * @param authValue : Kakao로부터 받은 토큰
 */
const responseKakao = async (authValue: string) => {
  // TODO: login API 연결 !!
  const res = await login(authValue, 'kakao');
  const token = res?.data.token;
  const user = await getUser(token);
  return user;
};

type KakaoWebViewProps = {
  closeWebView: () => void;
};

/**
 * Kakao Login을 위한 Web View 컴포넌트
 *
 * @param closeWebView : Web View를 닫는 함수
 */
const KakaoWebView = ({ closeWebView }: KakaoWebViewProps) => {
  // Userinfo Update Action
  const [, setUserInfo] = useAtom(createUserInfoAtom);
  // webview 에서 react-native로 전달받은 데이터를 가지고 유저 데이터 불러오는 함수. 성공시 web view close
  const loginProcess = async (data: any) => {
    try {
      const exp = 'code=';
      const condition = data.url.indexOf(exp);
      if (condition !== -1) {
        const accessCode = data.url.substring(condition + exp.length);
        const response = await getKakaoToken(accessCode);
        const authValue = response.data.access_token;
        const result = await responseKakao(authValue);
        setUserInfo(result);
        closeWebView();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <WebView
        originWhitelist={['*']}
        scalesPageToFit={false}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectURI}`,
        }}
        injectedJavaScript={runFirst}
        onMessage={(event) => {
          loginProcess(event.nativeEvent);
        }}
      />
    </View>
  );
};

export default KakaoWebView;
