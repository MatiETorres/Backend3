import { Router } from 'express';
import Adoption from '../models/Adoption.js';

const router = Router();

router.get('/', async (req, res) => {
  const data = await Adoption.find().populate('user pet');
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const item = await Adoption.findById(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

router.post('/', async (req, res) => {
  const created = await Adoption.create(req.body);
  res.status(201).json(created);
});

router.delete('/:id', async (req, res) => {
  const deleted = await Adoption.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Not found' });
  res.json({ status: 'deleted' });
});

export default router;
