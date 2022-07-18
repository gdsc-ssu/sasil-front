import { googleClientId, loginAsync, getUser } from '@sasil/common';
import GoogleLogin from 'react-google-login';
import { getUserInfoAtom } from '@/logics/store/actions';
import { useAtom } from 'jotai';
import LoginButton from '../LoginButton';

// Google 로그인 버튼 컴포넌트
const GoogleLoginButton = () => {
  // UserInfo Update Action
  const [, setUserInfo] = useAtom(getUserInfoAtom);

  /**
   * Google 토큰으로 JWT 토큰을 받고 이를 통해 유저 정보 불러오는 함수
   *
   * @param response : Google로부터 받는 로그인 response 객체
   */
  const responseGoogle = async (response: any) => {
    const res = await loginAsync('google-web', response.tokenId);
    if (res.isSuccess) {
      const { token } = res.result;
      const user = await getUser(token);
      if (user.isSuccess) {
        setUserInfo({ ...user.result, token });
      }
    }
  };

  return (
    <GoogleLogin
      clientId={googleClientId.web}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      render={(renderProps) => (
        <LoginButton social="google" onClick={renderProps.onClick} />
      )}
    />
  );
};
export default GoogleLoginButton;
