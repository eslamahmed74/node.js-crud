import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model('User', userSchema);
export default User;
