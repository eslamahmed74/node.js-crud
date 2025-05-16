import express from 'express';
import {
  getAllCategories,
  getCategoryProducts,
  addNewCategory,
} from '../controllers/categories-handler.js';

const router = express.Router();

router.route('/categories').get(getAllCategories).post(addNewCategory);

router.get('/categories/:id/products', getCategoryProducts);

export { router as CategoryRouter };
