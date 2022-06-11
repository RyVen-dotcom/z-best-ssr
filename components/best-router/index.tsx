import React from 'react';
import HMLayout from './comp/layout';
import GlobalFooter from './comp/global-footer';

const MyRouter:React.FC = ({ children }) => (
  <>
    <HMLayout />
    <div style={{ flexGrow: 1, flexBasis: 'auto', flexShrink: 0 }}>
      {children}
    </div>
    <GlobalFooter />
  </>
);
export default MyRouter;
