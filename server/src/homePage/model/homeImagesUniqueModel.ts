import mongoose from 'mongoose';

const homeImagesUnique = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
export const homeImagesUniqueModel = mongoose.model('homeImagesUnique', homeImagesUnique);
