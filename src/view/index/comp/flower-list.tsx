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
    width: 356,
    height: 460,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(6),
  },
  label: {
    margin: theme.spacing(2.75, 0),
  },
  btn: {
    width: 80,
    height: 44,
    border: '1px solid #bababa',
    fontSize: '16px',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionDuration: '0.5s',
    '&:hover': {
      color: theme.palette.background.paper,
      backgroundColor: '#a10000',
      borderColor: '#a10000',
    },
  },
}));

const FlowerList:React.FC<{data:Array<ImgProps>}> = ({ data }) => {
  const classes = useStyle();
  return (
    <WLayout classes={{ root: classes.root }}>
      <div className={classes.title}>
        <img src="/img/ih2.jpg" width={812} height={36} alt="摆件·花艺" />
      </div>
      <div className={classes.content}>
        {data.map((item) => (
          <Link key={item.imgUrl} href="/proDetail" underline="none">
            <div className={classes.goodBlock}>
              <SupImg src={item.imgUrl} width={356} height={356} alt="商品图" />
              <div className={classes.label}>{item.label}</div>
              <div className={classes.btn}>{`￥${item.price}.00`}</div>
            </div>
          </Link>
        ))}
      </div>
    </WLayout>
  );
};
export default FlowerList;
