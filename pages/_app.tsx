import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
