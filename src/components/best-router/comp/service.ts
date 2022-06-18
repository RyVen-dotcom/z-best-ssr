import axios from 'axios';
import { NavList } from '../../../../server/mock/nav-list';
import { HomeImageProps } from '../../../../server/mock/home-images';
import { PaintProps } from '../../../../server/mock/paint-images';

interface LoginProps {
  userName?: string; // 客户名称
  userIcon?: string; // 客户电话
}

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
  axios.get('http://localhost:9910/home/images').then((res) => {
    if (res.status === 200) {
      resolve(res.data.data);
    }
  }).catch(() => null);
});
// 获取paint页图片
export const getPaintImages = () => new Promise<PaintProps>((resolve) => {
  axios.get('http://localhost:9910/paint/images').then((res) => {
    if (res.status === 200) {
      resolve(res.data.data);
    }
  }).catch((e) => {
    console.log(e);
  });
});
// 登录
export const getHomeLogin = () => new Promise<LoginProps>((resolve) => {
  axios.get('/home/login').then((res) => {
    if (res.status === 200) {
      resolve(res.data.data);
    }
  }).catch(() => null);
});
// 退出登录
export const getHomeLogout = () => new Promise<LoginProps>((resolve) => {
  axios.get('/home/logout').then((res) => {
    if (res.status === 200) {
      resolve(res.data.data);
    }
  }).catch(() => null);
});
