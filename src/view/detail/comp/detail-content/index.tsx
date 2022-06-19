import React from 'react';
import { ButtonBase, makeStyles } from '@material-ui/core';
import { Tooltip } from 'antd';
import clsx from 'clsx';
import { proImg, scaleImg } from '../../../../../server/mock/pro-detail-list';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3.75),
    display: 'flex',
    justifyContent: 'space-between',
  },
  left: {
    width: 580,
  },
  right: {
    width: 500,
  },
  mainImg: {
    width: 580,
    height: 580,
  },
  hoverList: {
    marginTop: theme.spacing(2.5),
    display: 'flex',
    alignItems: 'center',
  },
  hoverImg: {
    width: 88,
    height: 88,
    marginRight: theme.spacing(2.5),
    boxSizing: 'border-box',
    '&:hover': {
      border: '1px solid #a20000',
    },
  },
  asideTop: {},
  title: {
    fontSize: 22,
    lineHeight: '50px',
  },
  description: {
    fontSize: 12,
    color: '#777',
    margin: theme.spacing(1.25, 0),
  },
  price: {
    fontSize: 22,
    lineHeight: '30px',
    color: '#c10000',
  },
  proIntro: {
    margin: theme.spacing(4.5, 0),
    padding: theme.spacing(2.5, 1.25),
    borderTop: '1px solid #dbdbdb',
    borderBottom: '1px solid #dbdbdb',
    fontSize: 12,
  },
  tips: {
    color: '#262626',
  },
  miniTitle: {
    lineHeight: '30px',
    color: '#262626',
    '& span': {
      color: '#c10000',
    },
  },
  clickList: {
    margin: theme.spacing(2.5, 0, 4.5),
    display: 'flex',
  },
  imgBlock: {
    width: 50,
    height: 50,
    padding: theme.spacing(0.25),
    marginRight: theme.spacing(2.5),
    boxSizing: 'border-box',
    '&:hover': {
      border: '1px solid #a20000',
      padding: theme.spacing(0.125),
    },
    '&.active': {
      border: '1px solid #a20000',
      padding: theme.spacing(0.125),
    },
  },
}));

interface DetailContentProps {
  proDetList: Array<scaleImg>
  proList: Array<proImg>
}

const DetailContent:React.FC<DetailContentProps> = ({
  proDetList,
  proList,
}) => {
  const classes = useStyle();
  const [url, setUrl] = React.useState('/img/temp/proDet.jpg');

  const handleEvent = (bigUrl:string) => {
    setUrl(bigUrl);
  };

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.mainImg}>
          <img src={url} width={580} height={580} alt="主图" />
        </div>
        <div className={classes.hoverList}>
          {
            proDetList.map((item) => (
              <div className={classes.hoverImg} key={item.small} onMouseEnter={() => handleEvent(item.big)}>
                <img src={item.small} alt="商品小图" width={86} height={86} />
              </div>
            ))
          }
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.asideTop}>
          <div className={classes.title}>【最家】非洲菊仿真花干花</div>
          <p className={classes.description}>【破损补寄】【适合放室内、卧室、书房、餐桌、办公室、客厅、电视柜等地方】【无理由退换货】【包邮】【白色现代简约花瓶】</p>
          <div className={classes.price}>￥59.90</div>
        </div>
        <div className={classes.proIntro}>
          <div className={classes.miniTitle}>颜色分类</div>
          <div className={classes.clickList}>
            {
              proList.map((item) => (
                <Tooltip
                  color="#fff"
                  placement="bottom"
                  title={(
                    <div className={classes.tips}>
                      {item.title}
                    </div>
                  )}
                >
                  <ButtonBase
                    onClick={() => handleEvent(item.big)}
                    key={item.title}
                    className={clsx(classes.imgBlock, { active: item.big === url })}
                  >
                    <img src={item.small} alt="商品缩略图" width={46} height={46} />
                  </ButtonBase>
                </Tooltip>
              ))
            }
          </div>
          <div className={classes.miniTitle}>
            数量  库存
            <span>2096</span>
            件
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
