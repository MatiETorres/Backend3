import { Router } from 'express';
import { generateMockUsers } from '../utils/mockingUsers.js';
import { generateMockPets } from '../utils/mockingPets.js';
import User from '../models/User.js';
import Pet from '../models/Pet.js';

const router = Router();

router.get('/mockingusers', (req, res) => {
    const users = generateMockUsers(50);
    res.json({ status: 'success', payload: users });
});

router.get('/mockingpets', (req, res) => {
    const pets = generateMockPets(100);
    res.json({ status: 'success', payload: pets });
});

router.post('/generateData', async (req, res) => {
    const { users, pets } = req.body;

    const mockUsers = generateMockUsers(users);
    const mockPets = generateMockPets(pets);

    await User.insertMany(mockUsers);
    await Pet.insertMany(mockPets);

    res.json({ status: 'success', message: 'Data generated and inserted' });
});

export default router;