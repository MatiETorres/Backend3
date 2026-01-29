import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  role: String,
  pets: Array
});

export default mongoose.model('User', schema);
