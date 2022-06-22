import { paintImages } from '../mock/paint-images';
import { proDetailList } from '../mock/pro-detail-list';
import { queryHomeImages } from './homePage/controller/controllers';
import { queryNavList } from './navList/controller/controllers';
import { queryUsers } from './user/controller/controller';

/* eslint-disable @typescript-eslint/no-explicit-any */

const Router = require('koa-router');

const router = new Router();

export default (server:any):void => {
  // 获取navBar图片List
  router.get('/nav/goods/images', queryNavList);

  // 获取首页图片
  router.get('/home/images', queryHomeImages);
  // 登录
  router.get('/home/login', queryUsers);
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

  server.use(router.routes());
};
