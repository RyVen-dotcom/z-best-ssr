import next from 'next';
import api from './src/api';
import { PORT, SESSION_MAX_AGE } from './config';
import mongoConnect from './src/db';

const Koa = require('koa');
const koaBody = require('koa-body');
const session = require('koa-session');

const os = require('os');

/**
 * 获取当前机器的ip地址
 */
const getIpAddress = () => {
  const ifaces = os.networkInterfaces();
  let localAddress = '';
  Object.keys(ifaces).forEach((dev) => {
    const iface = ifaces[dev];

    for (let i = 0; i < iface.length; i += 1) {
      const { family, address, internal } = iface[i];

      if (family === 'IPv4' && address !== '127.0.0.1' && !internal) {
        localAddress = address;
      }
    }
  });
  return localAddress;
};

const ipAddress = getIpAddress();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, quiet: true });
const handle = app.getRequestHandler();
app.prepare().then(async () => {
  const server = new Koa();
  server.proxy = true;
  server.use(koaBody({
    multipart: true,
    formidable: {
      keepExtensions: true,
    },
  }));
  server.keys = ['some secret liu']; // 这个是配合signed属性的签名key

  const session_config = {
    key: 'test', /**  cookie的key。 (默认是 koa:sess) */
    maxAge: SESSION_MAX_AGE, /**  session 过期时间，以毫秒ms为单位计算 。 */
    rolling: true, /** 是否每次响应时刷新Session的有效期。(默认是 false) */
  };
  server.use(session(session_config, server));

  await mongoConnect();

  api(server);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  server.use(async (ctx: any) => {
    // 把 session 信息传递给 next;
    ctx.req.session = ctx.session;
    ctx.req.ip = ctx.request.ip;
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
  server.listen(PORT, () => {
    console.log('服务器挂着完成... ');
    console.log(`http://localhost:${PORT}/`);
    console.log(`http://${ipAddress}:${PORT}/`);
  });
});
