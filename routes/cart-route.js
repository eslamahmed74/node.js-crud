import express from 'express';
import {
  getCarts,
  getCart,
  addToCart,
  updateCartItem,
  deleteCartItem,
  clearCart,
} from '../controllers/cart-handler.js';

const router = express.Router();

/**
 * @swagger
 * /carts:
 *   get:
 *     summary: Get all carts with user and product info
 *     responses:
 *       200:
 *         description: Array of cart objects
 */

/**
 * @swagger
 * /cart/user/{userId}:
 *   get:
 *     summary: Get cart for a specific user
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User cart
 *       404:
 *         description: Cart not found
 */

/**
 * @swagger
 * /cart/{userId}/items:
 *   post:
 *     summary: Add item to user's cart
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Item added
 */

/**
 * @swagger
 * /cart/{userId}/items/{productId}:
 *   patch:
 *     summary: Update item quantity in cart
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Item updated
 */

/**
 * @swagger
 * /cart/{userId}/items/{productId}:
 *   delete:
 *     summary: Remove item from cart
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item removed
 */

/**
 * @swagger
 * /cart/{userId}:
 *   delete:
 *     summary: Clear user's cart
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cart cleared
 */

router.get('/carts', getCarts);
router.get('/cart/user/:userId', getCart);
router.post('/cart/:userId/items', addToCart);
router.patch('/cart/:userId/items/:productId', updateCartItem);
router.delete('/cart/:userId/items/:productId', deleteCartItem);
router.delete('/cart/:userId', clearCart);

export { router as CartRouter };
