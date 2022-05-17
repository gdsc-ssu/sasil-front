import { createUserInfoAtom } from '@/logics/store/actions';
import { kakaoClientId, loginAsync, getUser } from '@sasil/common';
import { useAtom } from 'jotai';
import LoginButton from '../LoginButton';

// Kakao 로그인 버튼 컴포넌트
const KakaoLoginButton = () => {
  // UserInfo Update Action
  const [, setUserInfo] = useAtom(createUserInfoAtom);

  /**
   * Kakao 토큰으로 JWT 토큰을 받고 이를 통해 유저 정보 불러오는 함수
   *
   * @param authValue : Kakao로부터 받은 토큰
   */
  const responseKakao = async (authValue: string) => {
    const res = await loginAsync('kakao', authValue);
    if (res.isSuccess) {
      const { token } = res.result;
      const user = await getUser(token);
      if (user.isSuccess) return user;
    }

    return undefined;
  };

  // Kakao 로그인 성공시 유저 정보 받아온 후 userInfo atom에 넣어주는 함수
  const loginWithKakao = () => {
    const { Kakao }: any = window;
    Kakao.init(kakaoClientId);
    if (Kakao.isInitialized()) {
      Kakao.Auth.login({
        scope: 'profile_nickname, account_email',
        async success(authObj: any) {
          const authValue = authObj.access_token;
          const result = await responseKakao(authValue);
          setUserInfo(result);
        },
        fail(error: any) {
          console.log(JSON.stringify(error));
        },
      });
    }
  };

  return <LoginButton social="kakao" onClick={loginWithKakao} />;
};

export default KakaoLoginButton;
