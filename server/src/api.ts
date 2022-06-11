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

  server.use(router.routes());
};
