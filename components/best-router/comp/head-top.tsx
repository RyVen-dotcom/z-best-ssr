import React from 'react';
import { makeStyles } from '@material-ui/core';
import WLayout from '../../w-layout/w-layout';

const useStyle = makeStyles((theme) => ({
  outer: {
    transitionDuration: '0.3s',
    width: '100%',
    position: 'fixed',
    top: 0,
    backgroundColor: theme.palette.common.white,
    height: 80,
    zIndex: 11,
  },
  root: {

  },
}));

const HeadTop:React.FC = () => {
  const classes = useStyle();
  const [opacity, setOpacity] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 20);
  });
  return (
    <div className={classes.outer} style={{ opacity }}>
      <WLayout>
        123
      </WLayout>
    </div>
  );
};
export default HeadTop;
