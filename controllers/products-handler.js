import Product from '../models/products-model.js';
import Category from '../models/categories-model.js';

let productId = 14;

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (e) {
    console.log(e);
  }
};

export const addNewProduct = async (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price || !category) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const categoryDoc = await Category.findOne({ name: category });

    if (!categoryDoc) return res.status(400).send('Invalid category');

    const newProduct = new Product({
      _id: productId,
      name,
      price,
      categoryId: categoryDoc._id,
    });

    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const getProductBySearch = async (req, res) => {
  const { keyword, minprice } = req.query;

  if (!keyword && !minprice) {
    return res.status(400).send('Missing search parameters');
  }

  try {
    const filter = {};

    if (keyword) {
      filter.name = { $regex: keyword, $options: 'i' };
    }

    if (minprice) {
      filter.price = { $gte: Number(minprice) };
    }

    const products = await Product.find(filter);
    res.send(products);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).send('Product not found');

    res.send(product);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, categoryId } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, categoryId },
      { new: true }
    );

    if (!updatedProduct) return res.status(404).send('Product not found');
    res.send(updatedProduct);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const updatePartOfProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, categoryId } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        ...(name && { name }),
        ...(price && { price }),
        ...(categoryId && { categoryId }),
      },
      { new: true }
    );

    if (!updatedProduct) return res.status(404).send('Product not found');
    res.send(updatedProduct);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) return res.status(404).send('Product not found');
    res.send(deletedProduct);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
