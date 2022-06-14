import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import MyLink from '../../my-link';
import NavBar from './nav-bar';

const useStyle = makeStyles((theme) => ({
  outer: {
    transitionDuration: '0.3s',
    width: '100%',
    position: 'fixed',
    top: 0,
    backgroundColor: theme.palette.common.white,
    zIndex: 11,
    height: 80,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    minWidth: 880,
  },
  img: {
    position: 'absolute',
    left: '10%',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  textRoot: {
    margin: theme.spacing(0, 1.25, 2.5),
    fontSize: '14px',
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
      <MyLink href="/">
        <div className={classes.img}>
          <img src="/img/logo.png" width={142} height={48} alt="home.jpg" />
        </div>
      </MyLink>
      <NavBar />
      <TextField classes={{ root: classes.textRoot }} label="快捷搜索" placeholder="热门搜索：千花花瓶" size="small" />
    </div>
  );
};
export default HeadTop;
