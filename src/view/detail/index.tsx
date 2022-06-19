import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyBread from '@components/bread-list/my-bread';
import WLayout from '@components/w-layout/w-layout';
import DetailContent from '@view/detail/comp/detail-content';
import IntroMessage from '@view/detail/comp/intro-message';
import LikeList from '@view/detail/comp/like-list';
import theme from '../../../config/theme';
import { ProDetailList } from '../../../server/mock/pro-detail-list';

const labelArr = [
  {
    children: '首页',
    href: '/',
  },
  {
    children: '装饰摆件',
    href: '/flowerDer',
  },
  {
    children: '千花花艺',
    href: '/proList',
  },
];

const useStyle = makeStyles(() => ({
  root: {
    background: '#fff',
    paddingBottom: theme.spacing(7),
  },
}));
const VDetail:React.FC<ProDetailList> = ({
  proDetList,
  proList,
  msgList,
  seeList,
  likeList,
}) => {
  const classes = useStyle();
  return (
    <>
      <MyBread
        label="【最家】非洲菊仿真花干花"
        data={labelArr}
      />
      <WLayout classes={{ root: classes.root }}>
        <DetailContent proDetList={proDetList} proList={proList} />
        <IntroMessage msgList={msgList} seeList={seeList} />
        <LikeList likeList={likeList} />
      </WLayout>
    </>
  );
};
export default VDetail;
