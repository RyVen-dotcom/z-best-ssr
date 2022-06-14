import React from 'react';
import { makeStyles } from '@material-ui/core';
import WLayout from '../../components/w-layout/w-layout';
import MyBread from '../../components/bread-list/my-bread';
import ModernList from './comp/modern-list';
import { PaintProps } from '../../server/mock/paint-images';

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    width: '100%',
  },
  banner: {
    background: 'url("/img/temp/banner2.jpg")',
    backgroundSize: '100% 100%',
    height: 500,
  },
}));

const VPaint:React.FC<PaintProps> = (props) => {
  const classes = useStyle();
  const {
    modern, european, romantic, american,
  } = props;
  return (
    <>
      <div className={classes.header}>
        <div className={classes.banner} />
      </div>
      <MyBread
        label="墙式壁挂"
        data={[
          {
            children: '首页',
            href: '/',
          },
        ]}
      />
      <WLayout classes={{ root: classes.root }}>
        <ModernList data={modern} />
        <ModernList data={european} />
        <ModernList data={romantic} />
        <ModernList data={american} />
      </WLayout>
    </>
  );
};
export default VPaint;
