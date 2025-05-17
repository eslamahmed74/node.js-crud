import express from 'express';
import {
  getAllProduct,
  addNewProduct,
  getProductBySearch,
  getProductById,
  updateProduct,
  updatePartOfProduct,
  deleteProduct,
} from '../controllers/products-handler.js';

const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products with category info
 *     responses:
 *       200:
 *         description: List of products
 *   post:
 *     summary: Add a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               inStock:
 *                 type: boolean
 *               categoryId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Product added
 */

/**
 * @swagger
 * /products/search:
 *   get:
 *     summary: Search for products by name
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching products
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product found
 *       404:
 *         description: Product not found
 *   put:
 *     summary: Update entire product
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Product updated
 *   patch:
 *     summary: Partially update a product
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Product patched
 *   delete:
 *     summary: Delete a product
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Product deleted
 */

router.route('/products').get(getAllProduct).post(addNewProduct);

router.get('/products/search', getProductBySearch);

router
  .route('/products/:id')
  .get(getProductById)
  .put(updateProduct)
  .patch(updatePartOfProduct)
  .delete(deleteProduct);

export { router as ProductRouter };
