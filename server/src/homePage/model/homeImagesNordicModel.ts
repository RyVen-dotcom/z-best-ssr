import mongoose from 'mongoose';

const homeImagesNordic = new mongoose.Schema({
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
export const homeImagesNordicModel = mongoose.model('homeImagesNordic', homeImagesNordic);
