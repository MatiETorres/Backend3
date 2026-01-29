import { Router } from 'express';
const router = Router();

router.get('/mockingpets', (req, res) => res.json([]));
router.get('/mockingusers', (req, res) => res.json([]));

export default router;
