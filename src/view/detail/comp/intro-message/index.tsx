import React from 'react';
import { makeStyles } from '@material-ui/core';

interface IntroMessageProps {
  msgList: Array<string>
  seeList: Array<string>
}

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6.25),
  },
}));

const IntroMessage:React.FC<IntroMessageProps> = ({ msgList, seeList }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>1</div>
  );
};
export default IntroMessage;
