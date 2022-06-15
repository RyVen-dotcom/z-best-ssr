import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import HMLayout from './comp/layout';
import GlobalFooter from './comp/global-footer';
import RightUtilsBtn from './comp/right-utils-btn';

const MyRouter:React.FC = ({ children }) => {
  const startLoading = (): void => {
    NProgress.start();
  };

  const stopLoading = (): void => {
    NProgress.done();
  };

  const toScrollTop = (): void => {
    if (window) {
      window.scrollTo(0, 0);
    }
  };
  React.useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    // url完全改变时触发
    Router.events.on('routeChangeComplete', () => {
      stopLoading();
      toScrollTop();
    });
    // 更改url时发生错误 或 取消url负载时触发
    Router.events.on('routeChangeError', () => {
      stopLoading();
      toScrollTop();
    });

    return (): void => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
      Router.events.off('routeChangeError', stopLoading);
    };
  });

  return (
    <>
      <HMLayout />
      <div style={{ flexGrow: 1, flexBasis: 'auto', flexShrink: 0 }}>
        {children}
      </div>
      <GlobalFooter />
      <RightUtilsBtn />
    </>
  );
};
export default MyRouter;
