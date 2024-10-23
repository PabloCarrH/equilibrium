import React from 'react';
import { Stethoscope, Heart, FlaskConical } from 'lucide-react';
import { FeatureCard } from './feature-card';
const healthServices = [
  {
    name: 'Medicina General',
    title: 'Medicina General',
    description: 'Servicios de salud de calidad para todas las edades.',
    icon: Stethoscope,
  },
  {
    name: 'Medicina Homeopática',
    title: 'Medicina Homeopática',
    description: 'Enfoque natural y personalizado para tu salud.',
    icon: Heart,
  },
  {
    name: 'Laboratorio Clínico',
    title: 'Laboratorio Clínico',
    description: 'Servicios de diagnóstico precisos y confiables.',
    icon: FlaskConical,
  },
];

const HealthServices: React.FC = () => {
  return (
    <section className="section full-height" id="health-services">
      <div className="container full-height-container">
        <h2 className="title is-2">Servicios de Salud Integral</h2>
        <div className="columns is-multiline">
          {healthServices.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthServices;
