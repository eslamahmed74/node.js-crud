import Category from '../models/categories-model.js';
import Product from '../models/products-model.js';

let id = 3;

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const addNewCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const newCategory = new Category({ _id: id, name });
    await newCategory.save();
    res.status(201).send(newCategory);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const getCategoryProducts = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findById(id);
    if (!category) return res.status(404).send('Category not found');

    const categoryProduct = await Product.find({ categoryId: id });

    res.send({
      category,
      categoryProduct,
    });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
