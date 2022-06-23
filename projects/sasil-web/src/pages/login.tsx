import Script from 'next/script';
import styled from '@emotion/styled';
import SocialLoginBox from '@/components/organisms/login/SocialLoginBox';

const Container = styled.div({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const LoginPage = () => (
  <>
    <Script
      type="text/javascript"
      src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
      strategy="beforeInteractive"
    />
    <Script
      type="text/javascript"
      src="https://developers.kakao.com/sdk/js/kakao.min.js"
      strategy="beforeInteractive"
    />
    <Container>
      <SocialLoginBox />
    </Container>
  </>
);

export default LoginPage;
