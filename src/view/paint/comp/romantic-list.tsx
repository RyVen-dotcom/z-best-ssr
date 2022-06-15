import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyImg from '@components/my-img';
import MyLink from '@components/my-link';
import { ImgProps } from '../../../../server/mock/home-images';

const useStyle = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3.75, 0),
  },
  content: {
    display: 'flex',
  },
  img: {
    margin: theme.spacing(0, 0.75),
  },
  paintList: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  block: {
    marginBottom: theme.spacing(2.5),
    '&:hover': {
      boxShadow: '0 0 10px rgba(0,0,0,0.7)',
      '& img': {
        transform: 'scale(1.1)',
      },
      '& .before': {
        transform: 'scaleX(1)',
      },
      '& .after': {
        transform: 'scaleY(1)',
      },
    },
  },
  blockImg: {
    width: 374,
    height: 374,
  },
  label: {
    padding: theme.spacing(0, 1.25),
    fontSize: 12,
    lineHeight: '30px',
  },
  price: {
    padding: theme.spacing(0, 1.25),
    fontSize: 16,
    color: '#c10000',
    lineHeight: '30px',
  },
}));

const EuropeanList:React.FC<{data:Array<ImgProps>}> = ({ data }) => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.title}>
        <img src="/img/temp/tit03.jpg" width={812} height={36} alt="北欧·壁挂" />
      </div>
      <div className={classes.content}>
        <div className={classes.img}>
          <img src="/img/temp/sec301.jpg" alt="banner" width={374} height={880} />
        </div>
        <div className={classes.paintList}>
          {
            data.map((item) => (
              <MyLink href="/proDetail" key={item.imgUrl}>
                <div className={classes.block}>
                  <div className={classes.blockImg}>
                    <MyImg src={item.imgUrl} width={374} height={374} alt={item.label as string} />
                  </div>
                  <div className={classes.label}>
                    {item.label}
                  </div>
                  <div className={classes.price}>
                    {item.price}
                  </div>
                </div>
              </MyLink>
            ))
          }
        </div>
      </div>
    </>
  );
};
export default EuropeanList;
