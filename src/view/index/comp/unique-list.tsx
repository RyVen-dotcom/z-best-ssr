import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import WLayout from '@components/w-layout/w-layout';
import { ImgProps } from '../../../../server/mock/home-images';

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    height: 332,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    width: 840,
    background: 'url(/img/bg.jpg) #fff repeat-x bottom',
    position: 'absolute',
    top: -50,
    zIndex: 2,
  },
  inner: {
    display: 'flex',
    padding: theme.spacing(2),
  },
  clearFix: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
  },
  imgBlock: {
    width: 260,
    height: 350,
    overflow: 'hidden',
  },
  img: {
    transitionDuration: '1s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

const UniqueList:React.FC<{data:Array<ImgProps>}> = ({ data }) => {
  const classes = useStyle();
  return (
    <WLayout
      classes={{ root: classes.root, wrapper: classes.wrapper }}
    >
      <div className={classes.content}>
        <div className={classes.inner}>
          {data.map((item) => (
            <Link key={item.imgUrl} className={classes.clearFix} href={item.href}>
              <div className={classes.imgBlock}>
                <img className={classes.img} src={item.imgUrl} width={260} height={350} alt={item.imgUrl} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </WLayout>
  );
};
export default UniqueList;
