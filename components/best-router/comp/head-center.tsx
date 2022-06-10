import React from 'react';
import Image from 'next/image';
import { makeStyles, TextField } from '@material-ui/core';
import MyLink from '../../my-link';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 60,
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightBlock: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  linkBtn: {
    color: '#262626',
    padding: theme.spacing(0, 1.25),
    fontSize: '14px',
  },
  line: {
    height: 20,
    width: 1,
    background: '#dbdbdb',
  },
  textRoot: {
    margin: theme.spacing(0, 1.25),
  },
  iconLink: {
    margin: theme.spacing(0, 1.25),
  },
  icon: {
    margin: theme.spacing(0, 1.25),
    width: 20,
    height: 20,
  },
}));

const HeadCenter:React.FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <MyLink href="/">
        <Image src="/img/logo.png" width={142} height={50} />
      </MyLink>
      <div className={classes.rightBlock}>
        <MyLink href="/">
          <div className={classes.linkBtn}>登录</div>
        </MyLink>
        <div className={classes.line} />
        <MyLink href="/">
          <div className={classes.linkBtn}>注册</div>
        </MyLink>
        <TextField classes={{ root: classes.textRoot }} label="快捷搜索" placeholder="热门搜索：千花花瓶" />
        <MyLink href="/" className={classes.iconLink}>
          <img className={classes.icon} src="/img/grzx.png" alt="个人中心.png" />
        </MyLink>
        <MyLink href="/" className={classes.iconLink}>
          <img className={classes.icon} src="/img/ewm.png" alt="二维码.png" />
        </MyLink>
        <MyLink href="/" className={classes.iconLink}>
          <img className={classes.icon} src="/img/gwc.png" alt="购物车.png" />
        </MyLink>
      </div>
    </div>
  );
};
export default HeadCenter;
