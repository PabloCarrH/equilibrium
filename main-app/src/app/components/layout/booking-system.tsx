import React, { useState } from 'react';
import styles from './about.module.scss';

const BookingSystem: React.FC = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState(''); // Nuevo estado para el servicio
  const [email, setEmail] = useState(''); // Nuevo estado para el email

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3002/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date,
        time,
        name,
        contact,
        message,
        service,
        email,
      }), // Enviar email y service
    });

    if (response.ok) {
      alert('Reserva realizada con éxito');
      // Reiniciar formulario
      setDate('');
      setTime('');
      setName('');
      setContact('');
      setMessage('');
      setService('');
      setEmail('');
    } else {
      alert('Error al realizar la reserva');
    }
  };

  return (
    <section className="section full-height" id="booking">
      <div className="container full-height-container">
        <div className={`box ${styles['form']} ${styles['form-container']}`}>
          <h1 className="title has-text-centered">Reserva tu Cita</h1>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Nombre</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Servicio</label>
              <div className="control">
                <select
                  className="select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="estetico">Servicios Estéticos</option>
                  <option value="salud">Servicios de Salud</option>
                  <option value="geriatrico">Centro Geriátrico</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label className="label">Fecha</label>
              <div className="control">
                <input
                  className="input"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Hora</label>
              <div className="control">
                <input
                  className="input"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Contacto</label>
              <div className="control">
                <input
                  className="input"
                  type="tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Mensaje (opcional)</label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            <div className="control">
              <button type="submit" className="button is-primary">
                Reservar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;
