import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ImgProps } from '../../../server/mock/home-images';

const useStyle = makeStyles((theme) => ({
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
}));

const UniqueList:React.FC<{data:Array<ImgProps>}> = ({ data }) => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.title}>
        <img src="/img/temp/tit01.jpg" width={812} height={36} alt="北欧·壁挂" />
      </div>
      <div className={classes.content} />
    </>
  );
};
export default UniqueList;
