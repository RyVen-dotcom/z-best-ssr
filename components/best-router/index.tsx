import React from 'react';
import HMLayout from './comp/layout';
import GlobalFooter from './comp/global-footer';

const MyRouter:React.FC = ({ children }) => (
  <>
    <HMLayout />
    <div style={{ flex: 1 }}>
      {children}
    </div>
    <GlobalFooter />
  </>
);
export default MyRouter;
