import {
  AppleLoginButton,
  GoogleLoginButton,
  KakaoLoginButton,
} from '@/components/molelcules/LoginButton/social';
import SasilLogo from '@/assets/icons/SasilLogo.svg';
import * as styles from './SocialLoginBox.style';

// sasil 로고와 소셜 로그인 버튼들로 구성되어 있는 Organisms 컴포넌트
const SocialLoginBox = () => (
  <styles.Container>
    <styles.IconWrap>
      <SasilLogo width="110" height="110" />
    </styles.IconWrap>
    <GoogleLoginButton />
    <AppleLoginButton />
    <KakaoLoginButton />
  </styles.Container>
);

export default SocialLoginBox;
