import axios from 'axios';
import { NavList } from '../../../../server/mock/nav-list';
import { HomeImageProps } from '../../../../server/mock/home-images';

// 获取navBar 图片列表
export const getNavGoodsImages = () => new Promise<NavList[]>((resolve) => {
  axios.get('/nav/goods/images').then((res) => {
    if (res.status === 200) {
      resolve(res.data.data);
    }
  }).catch(() => null);
});

// 获取首页图片
export const getHomeImages = () => new Promise<HomeImageProps>((resolve) => {
  axios.get('/home/images').then((res) => {
    if (res.status === 200) {
      resolve(res.data.data);
    }
  }).catch(() => null);
});
// 登录
export const getHomeLogin = () => new Promise<HomeImageProps>((resolve) => {
  axios.get('/home/login').then((res) => {
    if (res.status === 200) {
      resolve(res.data.data);
    }
  }).catch(() => null);
});
