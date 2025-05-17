import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  categoryId: {
    type: Number,
    ref: 'Category',
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
