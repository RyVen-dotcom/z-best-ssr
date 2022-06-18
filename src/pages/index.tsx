import React from 'react';
import { GetServerSideProps } from 'next';
import { getHomeImages } from '@components/best-router/comp/service';
import VIndex from '../view/index';
import { ImgProps } from '../../server/mock/home-images';

interface HomeProps {
  uniqueList: Array<ImgProps>,
  flowerList: Array<ImgProps>,
  nordicList: Array<ImgProps>,
}

const Home: React.FC<HomeProps> = (props) => (
  <VIndex {...props} />
);

export const getServerSideProps:GetServerSideProps = async () => {
  const res = await getHomeImages();
  return {
    props: {
      uniqueList: res.unique,
      flowerList: res.flower,
      nordicList: res.nordic,
    },
  };
};

export default Home;
