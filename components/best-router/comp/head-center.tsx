import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(()=>({
  root:{
    width:'100%',
    height:80,
    marginTop:30,
  },
}))

const HeadCenter:React.FC = () => {
  const classes = useStyle()
  return (<div className={classes.root}>
  </div>)
}
export default HeadCenter
