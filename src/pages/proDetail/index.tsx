import React from 'react';
import VDetail from '@view/detail';
import { GetServerSideProps } from 'next';
import { getProDetailImages } from './service';
import { ProDetailList } from '../../../server/mock/pro-detail-list';

const Detail:React.FC<ProDetailList> = (props) => (<VDetail {...props} />);

export const getServerSideProps:GetServerSideProps = async () => {
  const res = await getProDetailImages();
  return {
    props: {
      proDetList: res.proDetList,
      proList: res.proList,
      msgList: res.msgList,
      seeList: res.seeList,
      likeList: res.likeList,
    },
  };
};

export default Detail;
