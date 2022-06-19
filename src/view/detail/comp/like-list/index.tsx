import React from 'react';
import { makeStyles } from '@material-ui/core';
import { priceImg } from '../../../../../server/mock/pro-detail-list';

interface LikeListProps {
  likeList: Array<priceImg>
}

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3.75),
  },
}));
const LikeList:React.FC<LikeListProps> = ({ likeList }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>2</div>
  );
};
export default LikeList;
