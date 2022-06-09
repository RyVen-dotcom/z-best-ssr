import React from "react";
import HMLayout from "./comp/layout";

const MyRouter:React.FC = ({children}) => {

  return (<div>
    <HMLayout/>
    {children}
  </div>)
}
export default MyRouter
