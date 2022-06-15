import React from 'react';
import { makeStyles } from '@material-ui/core';
import WLayout from '@components/w-layout/w-layout';

const useStyle = makeStyles(() => ({
  root: {
    background: 'url("/img/ib1.jpg")',
    backgroundSize: '100% 100%',
  },
  inner: {
    height: 366,
  },
}));

const MidBanner:React.FC = () => {
  const classes = useStyle();
  return (
    <WLayout classes={{ root: classes.root }}>
      <div className={classes.inner} />
    </WLayout>
  );
};
export default MidBanner;
