import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useScroll } from 'ahooks';
import MyLink from '../../my-link';

interface UtilBtnProps {
  label: string,
}

const useStyle = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    right: 20,
    top: '41.2%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 10,
  },
  outer: {
    position: 'relative',
    width: 50,
    height: 50,
    backgroundColor: '#f4f4f4',
    border: '1px solid #d6d6d6',
    marginBottom: theme.spacing(1.25),
    transitionDuration: '0.5s',
    '&:hover': {
      '& $inner': {
        opacity: 1,
      },
      '& $innerTop': {
        opacity: 0,
      },
    },
    cursor: 'pointer',
  },
  innerTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionDuration: '0.5s',
  },
  inner: {
    position: 'absolute',
    opacity: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    transitionDuration: '0.5s',
    fontSize: 12,
    padding: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    backgroundColor: '#a10000',
  },
}));

const UtilBtn:React.FC<UtilBtnProps> = ({ children, label }) => {
  const classes = useStyle();
  const [opacity, setOpacity] = React.useState(0);
  React.useEffect(() => {
    setOpacity(1);
    return () => {
      setOpacity(1);
    };
  });
  return (
    <div className={classes.outer} style={{ opacity }}>
      <div className={classes.innerTop}>{children}</div>
      <div className={classes.inner}>{label}</div>
    </div>
  );
};

const RightUtilsBtn:React.FC = () => {
  const classes = useStyle();
  const scroll = useScroll();
  const top = (scroll && scroll.top) || (scroll && scroll.left) || 0; // 滚动的高度
  const backToTop = ():void => {
    const anchor = document.querySelector('#__next') as HTMLElement;
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className={classes.root}>
      <MyLink href="/cart">
        <UtilBtn label="去购物车">
          <img src="/img/gt1.png" alt="utilPic" />
        </UtilBtn>
      </MyLink>
      <MyLink href="/index">
        <UtilBtn label="联系客服">
          <img src="/img/gt2.png" alt="utilPic" />
        </UtilBtn>
      </MyLink>
      <MyLink href="/my-info">
        <UtilBtn label="个人中心">
          <img src="/img/gt3.png" alt="utilPic" />
        </UtilBtn>
      </MyLink>
      {
        top > 140 ? (
          <div role="button" tabIndex={0} onClick={backToTop}>
            <UtilBtn label="返回顶部">
              <img src="/img/gt4.png" alt="utilPic" />
            </UtilBtn>
          </div>
        ) : null
      }
    </div>
  );
};

export default RightUtilsBtn;
