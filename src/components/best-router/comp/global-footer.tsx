import React from 'react';
import { makeStyles } from '@material-ui/core';

const footerArr = [
  {
    imgUrl: '/img/foot1.png',
    label: '7天无理由退货',
  },
  {
    imgUrl: '/img/foot2.png',
    label: '15天免费换货',
  },
  {
    imgUrl: '/img/foot3.png',
    label: '满599包邮',
  },
  {
    imgUrl: '/img/foot4.png',
    label: '手机特色服务',
  },
];

const useStyle = makeStyles((theme) => ({
  top: {
    height: 116,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3.75, 0),
    borderTop: '1px solid #bdbdbd',
  },
  bottom: {
    padding: theme.spacing(3.75, 0),
    backgroundColor: theme.palette.common.black,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  bottomText: {
    color: theme.palette.common.white,
  },
  adBlock: {
    width: 290,
    height: 54,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid #bdbdbd',
    '&:last-child': {
      border: 0,
    },
  },
  img: {
    width: 54,
    height: 54,
  },
  adText: {
    color: theme.palette.text.primary,
    marginLeft: theme.spacing(2),
    fontSize: theme.typography.body2.fontSize,
  },
}));

const GlobalFooter:React.FC = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.top}>
        {footerArr.map((item, index) => (
          <div className={classes.adBlock} key={item.label}>
            <div className={classes.img}>
              <img src={item.imgUrl} width={54} height={54} alt={`img${index}`} />
            </div>
            <div className={classes.adText}>{item.label}</div>
          </div>
        ))}
      </div>
      <div className={classes.bottom}>
        <div className={classes.bottomText}>最家家居©2013-2017公司版权所有 京ICP备080100-44备0000111000号</div>
        <div className={classes.bottomText}>违法和不良信息举报电话：400-800-8200，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</div>
      </div>
    </>
  );
};
export default GlobalFooter;
