export const categories = [
  { _id: 1, name: 'Phones' },
  { _id: 2, name: 'Laptops' },
];

export const products = [
  {
    _id: 11,
    name: 'iPhone 14',
    price: 999,
    categoryId: 1,
  },
  {
    _id: 12,
    name: 'Samsung Galaxy S22',
    price: 899,
    categoryId: 1,
  },
  {
    _id: 13,
    name: 'MacBook Pro',
    price: 1999,
    categoryId: 2,
  },
];

export const users = [
  {
    _id: 101,
    name: 'Alice',
    email: 'alice@example.com',
  },
  {
    _id: 102,
    name: 'Bob',
    email: 'bob@example.com',
  },
];

export const cart = [
  {
    _id: 201,
    userId: 101,
    items: [{ productId: 11, quantity: 2 }],
  },
  {
    _id: 202,
    userId: 102,
    items: [],
  },
];
