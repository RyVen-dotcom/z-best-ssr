// 获取paint页图片
import axios from 'axios';
import { ProDetailList } from '../../../server/mock/pro-detail-list';

export const getProDetailImages = () => new Promise<ProDetailList>((resolve) => {
  axios.get('http://localhost:9910/proDetails/images').then((res) => {
    if (res.status === 200) {
      resolve(res.data.data);
    }
  }).catch((e) => {
    console.log(e);
  });
});
