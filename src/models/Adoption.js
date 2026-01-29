import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet' },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Adoption', schema);
