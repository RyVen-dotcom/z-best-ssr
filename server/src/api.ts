const Router = require('koa-router');

const router = new Router();

export default (server:any):void =>{
  // 注册 找回密码
  router.post('/my-reg/customer/:id', async (ctx: any) => {

    ctx.status = 200;
    ctx.body = 'result';
  });
}
