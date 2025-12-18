import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routes/mocks.router.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mocksDB');

app.use('/api/mocks', mocksRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

app.listen(8080, () => console.log('Server running on port 8080'));