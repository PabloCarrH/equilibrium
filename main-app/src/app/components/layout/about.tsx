import React from 'react';
import { Shield, Users, Heart } from 'lucide-react';
import { FeatureCard } from './feature-card';

export function About() {
  const features = [
    {
      name: 'Cuidado Experto',
      description:
        'Nuestro equipo de profesionales certificados asegura la más alta calidad de atención.',
      icon: Shield,
    },
    {
      name: 'Enfoque Personalizado',
      description:
        'Tratamientos adaptados para satisfacer tus necesidades y objetivos individuales.',
      icon: Users,
    },
    {
      name: 'Bienestar Holístico',
      description:
        'Atención integral que aborda tanto el cuerpo como la mente.',
      icon: Heart,
    },
  ];

  return (
    <section className="section full-height" id="about">
      <div className="container full-height-container">
        <div className="columns is-vcentered">
          <div className="column is-6">
            <h2 className="title is-2">Sobre Equilibrium</h2>
            <p className="subtitle is-5 mb-6">
              En Equilibrium, creemos en un enfoque holístico del bienestar.
              Nuestro centro combina la sabiduría de la curación tradicional con
              prácticas médicas modernas para proporcionar una atención integral
              para la mente, el cuerpo y el espíritu.
            </p>
          </div>
          <div className="column is-6">
            <figure className="image">
              <img
                className="is-rounded"
                src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Sala de tratamiento de spa"
              />
            </figure>
          </div>
        </div>

        <div className="columns is-multiline mt-6">
          {features.map((feature) => (
            <FeatureCard key={feature.name} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
