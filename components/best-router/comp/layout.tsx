import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeadCenter from './head-center';
import WLayout from '../../w-layout/w-layout';
import NavBar from './nav-bar';

const useStyle = makeStyles(() => ({
  outer: {
    height: 140,
    position: 'relative',
    backgroundColor: '#fff',
  },
  root: {
    width: '100%',
    height: 90,
  },
  wrapper: {
    height: 90,
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
      <NavBar />
    </div>
  );
};
export default HMLayout;
