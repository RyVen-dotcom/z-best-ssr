import React from 'react';
import { makeStyles } from '@material-ui/core';
import Banner from './comp/banner';
import { ImgProps } from '../../server/mock/home-images';
import UniqueList from './comp/unique-list';
import FlowerList from './comp/flower-list';
import NordicList from './comp/nordic-list';
import SpecailList from './comp/specail-list';
import MidBanner from './comp/mid-banner';

interface VIndexProps {
  uniqueList: Array<ImgProps>,
  flowerList: Array<ImgProps>,
  nordicList: Array<ImgProps>,
}

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const VIndex:React.FC<VIndexProps> = (props) => {
  const {
    uniqueList,
    flowerList,
    nordicList,
  } = props;
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Banner />
      <UniqueList data={uniqueList} />
      <SpecailList />
      <FlowerList data={flowerList} />
      <MidBanner />
      <NordicList data={nordicList} />
    </div>
  );
};
export default VIndex;
