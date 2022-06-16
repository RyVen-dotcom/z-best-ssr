/* eslint-disable */
import '../../styles/globals.css';
import '../../styles/nprogress.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { wrapper } from '@store/index';
import theme from '../../config/theme';
import BestRouter from '@components/best-router';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <BestRouter>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </BestRouter>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
