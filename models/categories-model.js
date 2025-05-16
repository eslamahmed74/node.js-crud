import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: true },
});

const Category = mongoose.model('Category', categorySchema);
export default Category;
