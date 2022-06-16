import { navList } from '../mock/nav-list';
import { homeImages } from '../mock/home-images';

const Router = require('koa-router');

const router = new Router();

export default (server:any):void => {
  // 获取navBar图片List
  router.get('/nav/goods/images', async (ctx: any) => {
    ctx.status = 200;
    ctx.body = {
      status: 200,
      data: navList,
    };
  });

  // 获取首页图片
  router.get('/home/images', async (ctx: any) => {
    ctx.status = 200;
    ctx.body = {
      status: 200,
      data: homeImages,
    };
  });
  // 登录
  router.get('/home/login', async (ctx: any) => {
    ctx.status = 200;
    ctx.body = {
      msg: 'login success',
      success: 'SUCCESS',
      data: {
        userName: '卢本伟',
        userIcon: '/img/lubenwei.jpg',
      },
      status: 200,
    };
  });
  // 登录
  router.get('/home/logout', async (ctx: any) => {
    ctx.status = 200;
    ctx.body = {
      msg: 'logout success',
      success: 'SUCCESS',
      data: null,
      status: 200,
    };
  });
  server.use(router.routes());
};
