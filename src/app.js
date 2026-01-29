import express from 'express';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import mocksRouter from './routes/mocks.router.js';
import adoptionRouter from './routes/adoption.router.js';

const app = express();
app.use(express.json());


//CONFIGURACIÓN DE MONGODB

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/adoptionDB';

mongoose.connect(MONGO_URL)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ Mongo connection error:', err.message));


//CONFIGURACIÓN DE SWAGGER

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Adoption API',
      version: '1.0.0',
      description: 'API documentation for the Adoption project'
    }
  },
  apis: ['./src/routes/*.js'] 
};

const specs = swaggerJSDoc(swaggerOptions);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

//ROUTERS

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/mocks', mocksRouter);
app.use('/api/adoptions', adoptionRouter);

//SERVIDOR

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📄 Swagger docs at http://localhost:${PORT}/api/docs`);
});

export default app;
