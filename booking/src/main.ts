// apps/booking/src/app/main.ts

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db';
import Booking from './models/booking.model';

const app = express();
const PORT = process.env.PORT || 3002;

// Conectar a la base de datos
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Endpoint para crear una reserva
app.post('/booking', async (req, res) => {
  const bookingData = req.body;

  try {
    const newBooking = new Booking(bookingData);
    await newBooking.save();
    res.status(201).json({
      message: 'Reserva creada',
      data: newBooking,
    });
  } catch (error) {
    console.error('Error al crear la reserva:', error);
    res.status(500).json({
      message: 'Error al crear la reserva',
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Microservicio de reservas corriendo en http://localhost:${PORT}`);
});
