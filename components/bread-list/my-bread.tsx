import React from 'react';
import { makeStyles } from '@material-ui/core';
import WLayout from '../w-layout/w-layout';
import BreadList, { ShtBreadcrumbsProps } from './index';

const useStyle = makeStyles((theme) => ({
  root: {
    height: 40,
    borderBottom: '1px solid #DBDBDB',
    background: theme.palette.background.paper,
  },
  wrapper: {
    height: 40,
    display: 'flex',
    alignItems: 'center',
  },
}));

const MyBread:React.FC<ShtBreadcrumbsProps> = (props) => {
  const { ...rest } = props;
  const classes = useStyle();
  return (
    <WLayout classes={classes}>
      <div>
        <BreadList {...rest} />
      </div>
    </WLayout>
  );
};
export default MyBread;
