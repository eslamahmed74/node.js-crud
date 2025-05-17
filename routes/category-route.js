import express from 'express';
import {
  getAllCategories,
  getCategoryProducts,
  addNewCategory,
} from '../controllers/categories-handler.js';

const router = express.Router();

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     responses:
 *       200:
 *         description: List of categories
 *   post:
 *     summary: Add a new category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created
 */

/**
 * @swagger
 * /categories/{id}/products:
 *   get:
 *     summary: Get products under a category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Products for the category
 */

router.route('/categories').get(getAllCategories).post(addNewCategory);

router.get('/categories/:id/products', getCategoryProducts);

export { router as CategoryRouter };
