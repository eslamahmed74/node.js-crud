import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  _id: Number,
  userId: { type: Number, ref: 'User', required: true },
  items: [
    {
      productId: {
        type: Number,
        ref: 'Product',
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
