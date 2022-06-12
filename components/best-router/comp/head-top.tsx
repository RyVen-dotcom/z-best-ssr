import React from 'react';
import { makeStyles } from '@material-ui/core';
import WLayout from '../../w-layout/w-layout';
import MyLink from '../../my-link';

const useStyle = makeStyles((theme) => ({
  outer: {
    transitionDuration: '0.3s',
    width: '100%',
    position: 'fixed',
    top: 0,
    backgroundColor: theme.palette.common.white,
    zIndex: 11,
  },
  wrapper: {
    height: 80,
    padding: theme.spacing(2.5, 0),
    display: 'flex',
    alignItems: 'flex-end',
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
      <WLayout classes={{ wrapper: classes.wrapper }}>
        <MyLink href="/">
          <img src="/img/logo.png" width={142} height={48} alt="home.jpg" />
        </MyLink>
      </WLayout>
    </div>
  );
};
export default HeadTop;
