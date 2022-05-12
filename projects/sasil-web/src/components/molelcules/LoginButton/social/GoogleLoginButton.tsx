import { googleClientId } from '@sasil/common';
import GoogleLogin from 'react-google-login';
import { login, getUser } from '../routes';
import LoginButton from '../LoginButton';

/**
 * Google 토큰으로 JWT 토큰을 받고 이를 통해 유저 정보 불러오는 함수
 *
 * @param response : Google로부터 받는 로그인 response 객체
 */
// TODO : login API 연결 !!
const responseGoogle = async (response: any) => {
  const res = await login(response.tokenId, 'google-web');
  const token = res?.data.token;
  const user = await getUser(token);
  console.log(user);
};

// Google 로그인 버튼 컴포넌트
const GoogleLoginButton = () => (
  <GoogleLogin
    clientId={googleClientId.web}
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    render={(renderProps) => (
      <LoginButton social="google" onClick={renderProps.onClick} />
    )}
  />
);
export default GoogleLoginButton;
