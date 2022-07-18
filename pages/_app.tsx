import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {/* @ts-expect-error */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
