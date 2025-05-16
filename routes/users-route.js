import express from 'express';
import {
  getAllUser,
  getUserById,
  deleteUser,
  addNewUser,
  updateUser,
} from '../controllers/users-handler.js';

const router = express.Router();

router.route('/users').get(getAllUser).post(addNewUser);

router.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

export { router as UserRouter };
