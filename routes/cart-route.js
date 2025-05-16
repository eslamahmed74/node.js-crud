import express from 'express';
import {
  getCart,
  addToCart,
  updateCartItem,
  deleteCartItem,
  clearCart,
} from '../controllers/cart-handler.js';

const router = express.Router();

router.get('/cart/:userId', getCart);
router.post('/cart/:userId/items', addToCart);
router.patch('/cart/:userId/items/:productId', updateCartItem);
router.delete('/cart/:userId/items/:productId', deleteCartItem);
router.delete('/cart/:userId', clearCart);

export { router as CartRouter };
