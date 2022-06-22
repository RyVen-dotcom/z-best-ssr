import { DATABASE_URL } from '../config';

const mongoose = require('mongoose');

const mongoConnect = async () => {
  await mongoose
    .connect(DATABASE_URL)
    .then(() => {
      console.log('数据库连接成功');
    })
    .catch((err:any) => {
      console.log('数据库连接失败', err);
    });
};

export default mongoConnect;
