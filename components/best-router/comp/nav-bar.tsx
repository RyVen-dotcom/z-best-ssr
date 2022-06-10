import React from 'react';
import MyTabs from '../../my-tabs';

const labelArr = ['首页', '所有商品', '装饰摆件', '布艺软饰', '墙式壁挂', '蜡意香薰', '创意家居'];
const NavBar:React.FC = () => {
  console.log(labelArr);
  return (<MyTabs labelArr={labelArr} />);
};
export default NavBar;
