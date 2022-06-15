import React from 'react';
import { useScroll } from 'ahooks';
import { makeStyles } from '@material-ui/core';
import HeadCenter from './head-center';
import WLayout from '../../w-layout/w-layout';
import NavBar from './nav-bar';
import HeadTop from './head-top';

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
  const scroll = useScroll();
  const top = (scroll && scroll.top) || (scroll && scroll.left) || 0; // 滚动的高度
  return (
    <div className={classes.outer}>
      <WLayout classes={{ wrapper: classes.wrapper, root: classes.root }}>
        <HeadCenter />
      </WLayout>
      {
        top > 140 ? (<HeadTop />) : null
      }
      <NavBar />
    </div>
  );
};
export default HMLayout;
