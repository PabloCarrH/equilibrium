// apps/booking/src/app/booking.model.ts

import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }, // Campo de email
  contact: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  message: { type: String, default: '' },
  service: { type: String, required: true }, // Campo de servicio
});

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;
