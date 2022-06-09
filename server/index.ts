import next from 'next';
import api from './src/api'

const Koa = require('koa');
const koaBody = require('koa-body');

const app = next({ dev:true, quiet: true });
const handle = app.getRequestHandler();
app.prepare().then(()=>{
  const server = new Koa();
  server.proxy = true;
  server.use(koaBody({
    multipart: true,
    formidable: {
      keepExtensions: true,
    },
  }));
  api(server);
  server.use(async (ctx: any) => {
    // 把 session 信息传递给 next;
    ctx.req.session = ctx.session;
    ctx.req.ip = ctx.request.ip;
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
  server.listen(8080, () => {
    console.log('服务器挂着完成... ');
    console.log('http://localhost:8080/');
    console.log('http://192.168.51.29:8080/');
  });
})
