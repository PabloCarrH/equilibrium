import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <div className="notification is-primary is-light">
                Nuevos tratamientos disponibles.{' '}
                <a href="/services" className="has-text-primary has-text-weight-semibold">
                  Conoce más →
                </a>
              </div>
              <h1 className="title is-1 mb-5">
                Tu camino hacia el bienestar comienza aquí
              </h1>
              <p className="subtitle is-4 mb-6">
                Experimenta la perfecta armonía entre mente, cuerpo y espíritu en Equilibrio. Nuestro enfoque holístico combina la sabiduría tradicional con técnicas modernas para tu máximo bienestar.
              </p>
              <div className="buttons">
                <a href="/book" className="button is-primary is-medium">
                  Reservar Cita
                </a>
                <a href="/services" className="button is-text is-medium">
                  Descubre nuestros servicios <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            </div>
            <div className="column is-6">
              <figure className="image">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="Sala de tratamiento de spa con ambiente tranquilo"
                  className="is-rounded"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
