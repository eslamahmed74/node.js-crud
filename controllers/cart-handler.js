import Cart from '../models/carts-model.js';

export const getCart = async (req, res) => {
  const userId = req.params.userId;

  try {
    const userCart = await Cart.findOne({ userId });
    if (!userCart) return res.status(404).send('Cart not found for user');

    res.send(userCart.items);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const addToCart = async (req, res) => {
  const userId = req.params.userId;
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).send('Missing productId or quantity');
  }

  try {
    let userCart = await Cart.findOne({ userId });

    if (!userCart) {
      const newCart = new Cart({
        userId,
        items: [{ productId, quantity }],
      });
      await newCart.save();
      return res.status(201).send({ message: 'Cart created and item added' });
    }

    const itemIndex = userCart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      userCart.items[itemIndex].quantity += quantity;
    } else {
      userCart.items.push({ productId, quantity });
    }

    await userCart.save();
    res.status(201).send(userCart.items);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const updateCartItem = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  const { quantity } = req.body;

  if (quantity == null) {
    return res.status(400).send('Quantity is required');
  }

  try {
    const userCart = await Cart.findOne({ userId });
    if (!userCart) return res.status(404).send('Cart not found');

    const item = userCart.items.find(
      (i) => i.productId.toString() === productId
    );
    if (!item) return res.status(404).send('Product not found in cart');

    item.quantity = quantity;
    await userCart.save();

    res.send(item);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const deleteCartItem = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;

  try {
    const userCart = await Cart.findOne({ userId });
    if (!userCart) return res.status(404).send('Cart not found');

    userCart.items = userCart.items.filter(
      (i) => i.productId.toString() !== productId
    );
    await userCart.save();

    res.status(200).send(userCart.items);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const clearCart = async (req, res) => {
  const userId = req.params.userId;

  try {
    const userCart = await Cart.findOne({ userId });
    if (!userCart) return res.status(404).send('Cart not found');

    userCart.items = [];
    await userCart.save();

    res.status(200).send({ message: 'Cart cleared' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
