import { navList } from '../mock/nav-list';
import { paintImages } from '../mock/paint-images';
import { SESSION_MAX_AGE } from '../config';
import { proDetailList } from '../mock/pro-detail-list';
import { queryHomeImages } from './homePage/controller/controllers';

/* eslint-disable @typescript-eslint/no-explicit-any */

const Router = require('koa-router');

const router = new Router();

export default (server:any):void => {
  // 获取navBar图片List
  router.get('/nav/goods/images', async (ctx: any) => {
    ctx.response.status = 200;
    ctx.response.body = {
      status: 200,
      data: navList,
    };
    return false;
  });

  // 获取首页图片
  router.get('/home/images', queryHomeImages);
  // 获取paint页图片
  router.get('/paint/images', async (ctx: any) => {
    ctx.response.status = 200;
    ctx.response.body = {
      status: 200,
      data: paintImages,
    };
    return false;
  });
  // 获取proDetail页图片
  router.get('/proDetails/images', async (ctx: any) => {
    ctx.response.status = 200;
    ctx.response.body = {
      status: 200,
      data: proDetailList,
    };
    return false;
  });
  // 登录
  router.get('/home/login', async (ctx: any) => {
    const { session } = ctx;
    const data = {
      userName: '卢本伟',
      userIcon: '/img/lubenwei.jpg',
    };
    session.userInfo = {
      userName: data.userName,
      userIcon: data.userIcon,
      expiresIn: Date.now() + SESSION_MAX_AGE,
    };

    ctx.response.status = 200;
    ctx.response.body = {
      msg: 'login success',
      success: 'SUCCESS',
      data,
      status: 200,
    };
    return false;
  });
  // 退出登录
  router.get('/home/logout', async (ctx: any) => {
    ctx.session = null;
    ctx.response.status = 200;
    ctx.response.body = {
      msg: 'logout success',
      success: 'SUCCESS',
      data: null,
      status: 200,
    };
    return false;
  });
  server.use(router.routes());
};
