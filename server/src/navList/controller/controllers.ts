import { navListImagesModel } from '../model/navListImagesModel';

export const queryNavList = async (ctx:any) => {
  const navList = await navListImagesModel
    .find()
    .catch((err:any) => {
      console.log(`查询异常:${err}`);
    });
  ctx.response.status = 200;
  ctx.response.body = {
    status: 200,
    data: navList,
  };
  return false;
};
