import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

interface SupImgProps {
    src:string;
    width:number;
    height:number;
    alt:string;
}

const useStyle = makeStyles<Theme, {width:number, height:number}>(() => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      '& $before': {
        right: 0,
        bottom: 0,
      },
      '& $after': {
        left: 0,
        top: 0,
      },
    },
  },
  before: {
    position: 'absolute',
    right: '100%',
    bottom: '100%',
    backgroundColor: '#90D7EC',
    opacity: 0.2,
    transitionDuration: '0.5s',
    zIndex: 1,
  },
  after: {
    position: 'absolute',
    left: '100%',
    top: '100%',
    backgroundColor: '#90D7EC',
    opacity: 0.2,
    transitionDuration: '0.5s',
    zIndex: 1,
  },
}));

const SupImg:React.FC<SupImgProps> = ({
  src, width, height, alt,
}) => {
  const classes = useStyle({ width, height });
  return (
    <div className={classes.root}>
      <img src={src} width={width} height={height} alt={alt} />
      <div className={classes.before} style={{ width, height }} />
      <div className={classes.after} style={{ width, height }} />
    </div>
  );
};
export default SupImg;
