import React from "react";
import { makeStyles } from "@material-ui/core";
import HeadCenter from "./head-center";

const useStyle = makeStyles(()=>({
  root:{
    width:'100%',
    height:140,
  },
  wrapper:{
    height:140,
    backgroundColor:'#fff',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }
}))

const HMLayout:React.FC = () => {
  const classes = useStyle()
  return (<div className={classes.root}>
    <div className={classes.wrapper}>
      <HeadCenter/>
    </div>
  </div>)
}
export default HMLayout
