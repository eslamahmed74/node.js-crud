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

router.route('/products').get(getAllProduct).post(addNewProduct);

router.get('/products/search', getProductBySearch);

router
  .route('/products/:id')
  .get(getProductById)
  .put(updateProduct)
  .patch(updatePartOfProduct)
  .delete(deleteProduct);

export { router as ProductRouter };
