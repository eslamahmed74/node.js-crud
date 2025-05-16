import { categories, products, users, cart } from './data.js';
import Category from './models/categories-model.js';
import Product from './models/products-model.js';
import User from './models/users-model.js';
import Cart from './models/carts-model.js';

export const seed = async () => {
  try {
    await Category.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    await Category.insertMany(categories);
    await Product.insertMany(products);
    await User.insertMany(users);
    await Cart.insertMany(cart);

    console.log('Seeding completed successfully');
  } catch (err) {
    console.error('Error during seeding:', err);
    process.exit(1);
  }
};
