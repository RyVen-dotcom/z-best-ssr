import React from 'react';
import { makeStyles } from '@material-ui/core';
import Banner from './comp/banner';
import { ImgProps } from '../../server/mock/home-images';

interface VIndexProps {
  uniqueList: Array<ImgProps>,
  flowerList: Array<ImgProps>,
  nordicList: Array<ImgProps>,
}

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: '#cfcfcf',
  },
}));

const VIndex:React.FC<VIndexProps> = (props) => {
  const {
    uniqueList,
    flowerList,
    nordicList,
  } = props;
  console.log(uniqueList);
  console.log(flowerList);
  console.log(nordicList);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Banner />
    </div>
  );
};
export default VIndex;
