import mongoose from 'mongoose';

const user = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userIcon: {
    type: String,
    required: true,
  },
});
export const userModel = mongoose.model('user', user);
