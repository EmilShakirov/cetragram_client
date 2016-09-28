import { Schema, arrayOf, valuesOf } from 'normalizr';

const
  likeSchema = new Schema('likes'),
  imageSchema = new Schema('images');

const SCHEMAS = {
  images: arrayOf(imageSchema)
};
export { imageSchema, likeSchema, SCHEMAS };
