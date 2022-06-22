import mongoose from 'mongoose';

const navListImage = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
export const navListImagesModel = mongoose.model('navListImage', navListImage);
