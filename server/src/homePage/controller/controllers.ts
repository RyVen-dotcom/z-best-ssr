import { homeImagesUniqueModel } from '../model/homeImagesUniqueModel';
import { homeImagesFlowerModel } from '../model/homeImagesFlowerModel';
import { homeImagesNordicModel } from '../model/homeImagesNordicModel';

export const queryHomeImages = async (ctx:any) => {
  const unique = await homeImagesUniqueModel
    .find()
    .catch((err:any) => {
      console.log(`查询异常:${err}`);
    });
  const flower = await homeImagesFlowerModel
    .find()
    .catch((err:any) => {
      console.log(`查询异常:${err}`);
    });
  const nordic = await homeImagesNordicModel
    .find()
    .catch((err:any) => {
      console.log(`查询异常:${err}`);
    });
  ctx.response.status = 200;
  ctx.response.body = {
    status: 200,
    data: {
      unique,
      flower,
      nordic,
    },
  };
  return false;
};
