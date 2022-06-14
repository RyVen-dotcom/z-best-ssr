import next from 'next';
import api from './src/api';
import { PORT } from './config';

const Koa = require('koa');
const koaBody = require('koa-body');

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

const app = next({ dev: true, quiet: true });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = new Koa();
  server.proxy = true;
  server.use(koaBody({
    multipart: true,
    formidable: {
      keepExtensions: true,
    },
  }));
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
