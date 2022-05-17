import type { AppProps } from 'next/app';
import '@/constants/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Component {...pageProps} />;
}

export default MyApp;
