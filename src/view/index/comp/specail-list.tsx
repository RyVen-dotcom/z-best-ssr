import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import WLayout from '@components/w-layout/w-layout';

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3.75, 0),
  },
  picRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(4),
    '&:last-child': {
      marginBottom: 0,
    },
  },
}));

const SpecailList:React.FC = () => {
  const classes = useStyle();
  return (
    <WLayout classes={{ root: classes.root }}>
      <div className={classes.title}>
        <img src="/img/ih1.jpg" width={812} height={36} alt="心水·特色" />
      </div>
      <div className={classes.picRow}>
        <Link href="/proDetail">
          <img src="/img/n1.jpg" alt="家具图" />
        </Link>
        <Link href="/proDetail">
          <img src="/img/n2.jpg" alt="家具图" />
        </Link>
        <Link href="/proDetail">
          <img src="/img/n3.jpg" alt="家具图" />
        </Link>
      </div>
      <div className={classes.picRow}>
        <Link href="/proDetail">
          <img src="/img/n4.jpg" alt="家具图" />
        </Link>
        <Link href="/proDetail">
          <img src="/img/n5.jpg" alt="家具图" />
        </Link>
        <Link href="/proDetail">
          <img src="/img/n6.jpg" alt="家具图" />
        </Link>
      </div>
    </WLayout>
  );
};

export default SpecailList;
