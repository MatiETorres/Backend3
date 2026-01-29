import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number
});

export default mongoose.model('Pet', schema);
