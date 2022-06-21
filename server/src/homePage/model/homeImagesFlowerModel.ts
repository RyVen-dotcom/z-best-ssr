import mongoose from 'mongoose';

const homeImagesFlower = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
export const homeImagesFlowerModel = mongoose.model('homeImagesFlower', homeImagesFlower);
