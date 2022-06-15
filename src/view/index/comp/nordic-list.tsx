import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import WLayout from '@components/w-layout/w-layout';
import { ImgProps } from '../../../../server/mock/home-images';
import SupImg from './sup-img';

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3.75, 0),
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  goodBlock: {
    width: 268,
    height: 322,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2.5),
    transitionDuration: '0.5s',
    '&:hover': {
      boxShadow: '0 0 10px rgba(0,0,0,0.7)',
    },
  },
  label: {
    lineHeight: '25px',
  },
  price: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#a10000',
  },
}));

const NordicList:React.FC<{data:Array<ImgProps>}> = ({ data }) => {
  const classes = useStyle();
  return (
    <WLayout classes={{ root: classes.root }}>
      <div className={classes.title}>
        <img src="/img/ih3.jpg" width={812} height={36} alt="北欧·壁挂" />
      </div>
      <div className={classes.content}>
        {
          data.map((item) => (
            <Link key={item.imgUrl} href="/proDetail" underline="none">
              <div className={classes.goodBlock}>
                <SupImg src={item.imgUrl} width={268} height={268} alt="商品图" />
                <div className={classes.label}>{item.label}</div>
                <div className={classes.price}>{`￥${item.price}.00`}</div>
              </div>
            </Link>
          ))
        }
      </div>
    </WLayout>
  );
};
export default NordicList;
