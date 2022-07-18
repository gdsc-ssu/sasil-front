import Script from 'next/script';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';

import styled from '@emotion/styled';
import SocialLoginBox from '@/components/organisms/login/SocialLoginBox';
import { getUserInfoAtom } from '@/logics/store/actions';

const Container = styled.div({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const LoginPage = () => {
  const router = useRouter();

  const [userInfo] = useAtom(getUserInfoAtom);

  if (userInfo?.token) {
    router.back();
  }

  return (
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
};

export default LoginPage;
