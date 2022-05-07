/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import AuthTemplateWrapped from '@/components/templates/auth/AuthTemplate';

const AuthPage = () => (
  <>
    <Head>
      <script
        type="text/javascript"
        src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
      />
      <script
        type="text/javascript"
        src="https://developers.kakao.com/sdk/js/kakao.min.js"
      />
    </Head>
    <AuthTemplateWrapped />
  </>
);

export default AuthPage;
