import express from 'express';
import authRoutes from './routes/auth.routes';
import cors from 'cors';
import mongoose from 'mongoose';

const app: express.Application = express();

const PORT = 3001;

const allowedOrigins = ['http://localhost:4200', 'http://localhost:3000'];
app.use(
  cors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

app.use(express.json());
app.use('/auth', authRoutes);

const mongoURI = 'mongodb://localhost:27017/mydatabase'; // Asegúrate de que este URI sea correcto

mongoose
  .connect(mongoURI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error conectando a MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
