import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeadCenter from './head-center';
import WLayout from '../../w-layout/w-layout';

const useStyle = makeStyles(() => ({
  outer: {
    height: 140,
  },
  root: {
    width: '100%',
    backgroundColor: '#fff',
    height: 140,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const HMLayout:React.FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.outer}>
      <WLayout classes={{ wrapper: classes.wrapper, root: classes.root }}>
        <HeadCenter />
      </WLayout>
    </div>
  );
};
export default HMLayout;
