import React from 'react';
import { makeStyles } from '@material-ui/core';
import WLayout from '../../components/w-layout/w-layout';
import MyBread from '../../components/bread-list/my-bread';

const useStyle = makeStyles((theme) => ({
  header: {
    width: '100%',
  },
  banner: {
    background: 'url("/img/temp/banner2.jpg")',
    backgroundSize: '100% 100%',
    height: 500,
  },
}));

const VPaint:React.FC = () => {
  const classes = useStyle();
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
      <WLayout>123</WLayout>
    </>
  );
};
export default VPaint;
