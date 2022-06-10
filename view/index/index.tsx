import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    width: 100,
    height: 100,
    backgroundColor: '#cfcfcf',
  },
}));

const VIndex:React.FC = () => {
  const classes = useStyle();
  return (<div className={classes.root}>123</div>);
};
export default VIndex;
