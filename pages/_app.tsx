import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { createStore } from 'redux'; // deprecated 됐지만 그냥 쓰기
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../modules';

const store = createStore(rootReducer, composeWithDevTools());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {/* @ts-expect-error */}
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
