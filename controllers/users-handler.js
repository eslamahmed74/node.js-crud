import User from '../models/users-model.js';

let userId = 103;

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const addNewUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const newUser = new User({ _id: userId, name, email });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).send('User not found');
    res.send(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );

    if (!updatedUser) return res.status(404).send('User not found');
    res.send(updatedUser);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).send('User not found');
    res.send(deletedUser);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
