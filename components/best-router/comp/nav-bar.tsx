import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import MyTabs from '../../my-tabs';
import { getNavGoodsImages } from './service';
import { NavList } from '../../../server/mock/nav-list';
import MyLink from '../../my-link';

const labelArr = ['首页', '所有商品', '装饰摆件', '布艺软饰', '墙式壁挂', '蜡意香薰', '创意家居'];

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  slideDown: {
    width: '100%',
    height: 'auto',
    padding: theme.spacing(2.5),
    backgroundColor: '#fff',
    position: 'absolute',
    top: 'calc(100%)',
    opacity: 0,
    transitionDuration: '2s',
    display: 'flex',
    zIndex: 2,
    '&.active': {
      opacity: 1,
    },
  },
  goodsNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItem: {
    width: 232,
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    width: 162,
    height: 200,
  },
  navText: {
    height: 50,
    marginTop: theme.spacing(2.5),
    lineHeight: '50px',
  },
  navLink: {
    color: theme.palette.text.primary,
    height: 20,
    marginRight: theme.spacing(5),
    lineHeight: '20px',
  },
  picLink: {
    borderRight: '1px solid #bdbdbd',
    '&:last-child': {
      border: 0,
    },
  },
  navLinkList: {
    width: 768,
    display: 'flex',
  },
}));

const NavBar:React.FC = () => {
  const classes = useStyle();
  const [value, setValue] = React.useState<number>(-1);
  const [navList, setNavList] = React.useState<NavList[]>([]);
  const router = useRouter();

  React.useEffect(() => {
    getNavGoodsImages().then((res) => {
      setNavList(res);
    });
  }, []);

  const handleChange = (index:number) => {
    if (index === 0) {
      router.push('#').then();
    }
  };
  const handleHover = (index?:number) => {
    if (index || index === 0) {
      setValue(index);
    }
  };
  const handleMouseLeave = () => {
    setValue(-1);
  };
  return (
    <div onMouseLeave={handleMouseLeave}>
      <MyTabs
        labelArr={labelArr}
        onChange={handleChange}
        onHover={handleHover}
      />
      {
        value === 1 ? (
          <div className={clsx(classes.slideDown, classes.goodsNav, { active: value === 1 })}>
            {
                navList.map((item) => (
                  <MyLink className={classes.picLink} key={item.label} href="/">
                    <div className={classes.navItem}>
                      <div className={classes.img}>
                        <Image src={item.imageUrl} width={162} height={200} />
                      </div>
                      <div className={classes.navText}>
                        {item.label}
                      </div>
                    </div>
                  </MyLink>
                ))
              }
          </div>
        ) : null
      }
      {
        value === 2 ? (
          <div className={clsx(classes.slideDown, classes.goodsNav, { active: value === 2 })}>
            <div className={classes.navLinkList}>
              <MyLink href="/proList">
                <div className={classes.navLink}>千花花艺</div>
              </MyLink>
              <MyLink href="/vase-proList">
                <div className={classes.navLink}>花瓶花器</div>
              </MyLink>
            </div>
          </div>
        ) : null
      }
      {
        value === 3 ? (
          <div className={clsx(classes.slideDown, classes.goodsNav, { active: value === 3 })}>
            <div className={classes.navLinkList}>
              <MyLink href="/proList">
                <div className={classes.navLink}>桌布罩件</div>
              </MyLink>
              <MyLink href="/vase-proList">
                <div className={classes.navLink}>靠枕靠垫</div>
              </MyLink>
            </div>
          </div>
        ) : null
      }
    </div>
  );
};
export default NavBar;
