import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../config/theme';
import BestRouter from "../components/best-router";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps)
  return (
      <ThemeProvider theme={theme}>
        <BestRouter>
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </BestRouter>
      </ThemeProvider>
  )
}

export default MyApp
