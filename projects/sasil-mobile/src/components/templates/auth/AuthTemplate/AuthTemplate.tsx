import SocialLoginBox from '@/components/organisms/auth/SocialLoginBox';
import { AuthSessionResult } from 'expo-auth-session';

type AuthTemplateProps = {
  kakaoLogin: () => void;
  appleLogin: () => Promise<void>;
  googleLogin: () => Promise<AuthSessionResult>;
};

const AuthTemplate = ({
  appleLogin,
  kakaoLogin,
  googleLogin,
}: AuthTemplateProps) => (
  <SocialLoginBox
    appleLogin={appleLogin}
    kakaoLogin={kakaoLogin}
    googleLogin={googleLogin}
  />
);

export default AuthTemplate;
