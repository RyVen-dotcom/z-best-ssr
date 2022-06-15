import React from 'react';
import { makeStyles } from '@material-ui/core';

interface MyImgProps {
  src:string;
  width:number;
  height:number;
  alt:string;
}
const useStyle = makeStyles(() => ({
  root: {
    overflow: 'hidden',
    position: 'absolute',
    '& .before': {
      left: 20,
      top: 20,
      position: 'absolute',
      borderLeft: '2px solid #90D7EC',
      borderTop: '2px solid #90D7EC',
      transitionDuration: '0.5s',
      transform: 'scaleX(0)',
      transformOrigin: '0 -100%',
      zIndex: 2,
    },
    '& .after': {
      bottom: 20,
      right: 20,
      position: 'absolute',
      borderRight: '2px solid #90D7EC',
      borderBottom: '2px solid #90D7EC',
      transitionDuration: '0.5s',
      transform: 'scaleY(0)',
      transformOrigin: '0 100%',
      zIndex: 2,
    },
  },
  img: {
    transitionDuration: '0.5s',
  },
}));

const MyImg:React.FC<MyImgProps> = (props) => {
  const {
    src, width, height, alt,
  } = props;
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className="before" style={{ width: width - 28, height: height - 28 }} />
      <img className={classes.img} src={src} width={width} height={height} alt={alt} />
      <div className="after" style={{ width: width - 28, height: height - 28 }} />
    </div>
  );
};
export default MyImg;
