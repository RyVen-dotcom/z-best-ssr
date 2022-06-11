import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  img: {
    flex: 1,
  },
}));

const MidBanner:React.FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <img className={classes.img} src="/img/ib1.jpg" alt="banner2" />
    </div>
  );
};
export default MidBanner;
