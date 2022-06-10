import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    height: 60,
    marginTop: 30,
  },
}));

const HeadCenter:React.FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.root} />
  );
};
export default HeadCenter;
