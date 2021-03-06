/* eslint-disable */
import '../../styles/globals.css';
import '../../styles/nprogress.css';
import 'antd/dist/antd.css';
import type {AppProps} from 'next/app';
import {ThemeProvider} from '@material-ui/core/styles';
import {wrapper} from '@store/index';
import theme from '../../config/theme';
import BestRouter from '@components/best-router';

const MyApp = ({Component, pageProps}: AppProps) => {

    return (
        <ThemeProvider theme={theme}>
            <BestRouter>
                {/* @ts-ignore */}
                <Component {...pageProps} />
            </BestRouter>
        </ThemeProvider>
    );
}
MyApp.getInitialProps = wrapper.getInitialAppProps((store)=>
    async ({Component,ctx}:any) => {
        const {req} = ctx
        if (typeof window === 'undefined'){
            if (req?.session){
                store.dispatch({
                    type: 'LOGIN',
                    payload:{
                        userName: req.session?.userInfo?.userName,
                        userIcon: req.session?.userInfo?.userIcon,
                        isLogin: !!req.session?.userInfo,
                    }
                })
            }
        }
    return {
            pageProps:{
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : Object.create(null)),
            }
        }
    }
);

export default wrapper.withRedux(MyApp);
