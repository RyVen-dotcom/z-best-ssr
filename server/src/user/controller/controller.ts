import { SESSION_MAX_AGE } from '../../../config';
import { userModel } from '../model/userModel';

export const queryUsers = async (ctx:any) => {
  const { session } = ctx;
  const user = await userModel
    .find({ userName: '卢本伟' })
    .catch((err:any) => {
      console.log(`查询异常:${err}`);
    });
  const data = user[0];
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
};
