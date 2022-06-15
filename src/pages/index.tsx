import React from 'react';
import { GetServerSideProps } from 'next';
import VIndex from '../view/index';
import { homeImages, ImgProps } from '../../server/mock/home-images';

interface HomeProps {
  uniqueList: Array<ImgProps>,
  flowerList: Array<ImgProps>,
  nordicList: Array<ImgProps>,
}

const Home: React.FC<HomeProps> = (props) => (
  <VIndex {...props} />
);

export const getServerSideProps:GetServerSideProps = async () => {
  const res = homeImages;

  return {
    props: {
      uniqueList: res.unique,
      flowerList: res.flower,
      nordicList: res.nordic,
    },
  };
};

export default Home;
