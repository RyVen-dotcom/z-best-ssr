import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyle = makeStyles((theme) => ({
  root: {
    '& .slide-down-enter': {
      opacity: 0,
    },
    '& .slide-down-enter-active': {
      opacity: 1,
      transition: 'opacity 500ms',
    },
    '& .slide-down-exit': {
      opacity: 1,
    },
    '& .slide-down-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms',
    },
  },

  slideDown: {
    width: '100%',
    padding: theme.spacing(2.5),
    backgroundColor: '#fff',
    position: 'absolute',
    top: 'calc(100%)',
    display: 'flex',
    zIndex: 2,
    overflow: 'hidden',
    opacity: 0,
    transitionDuration: '0.5s',
  },
  goodsNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const SlideDown:React.FC = ({ children }) => {
  const classes = useStyle();

  const [inProp, setInProp] = React.useState(0);
  React.useEffect(() => {
    setInProp(1);
    return () => {
      setInProp(0);
    };
  });
  return (
    <div className={clsx(classes.slideDown, classes.goodsNav)} style={{ opacity: inProp }}>
      {children}
    </div>
  );
};

export default SlideDown;
