import {
  Sparkles,
  Flower2,
  Waves,
  Stethoscope,
  Heart,
  FlaskConical,
} from 'lucide-react';
import { ServiceCard } from './services-card';

export function Services() {
  const services = [
    {
      title: 'Tratamientos Faciales',
      description:
        'Revitaliza tu piel con nuestros tratamientos faciales especializados, desde limpieza profunda hasta anti-envejecimiento.',
      icon: Sparkles,
    },
    {
      title: 'Tratamientos Corporales',
      description:
        'Experimenta una renovación total del cuerpo con nuestros masajes terapéuticos y envolturas corporales.',
      icon: Flower2,
    },
    {
      title: 'Servicios de Spa',
      description:
        'Sumérgete en la relajación con nuestros servicios de spa premium y tratamientos de bienestar.',
      icon: Waves,
    },
    {
      title: 'Servicios Médicos',
      description:
        'Servicios de atención médica profesional que incluyen medicina general y homeopatía.',
      icon: Stethoscope,
    },
    {
      title: 'Cuidados Geriátricos',
      description:
        'Servicios de cuidado especializado adaptados al bienestar y confort de los ancianos.',
      icon: Heart,
    },
    {
      title: 'Servicios de Laboratorio',
      description:
        'Servicios clínicos de laboratorio completos para diagnósticos precisos.',
      icon: FlaskConical,
    },
  ];

  return (
    <section className="section full-height" id="services">
      <div className="container full-height-container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-2">Nuestros Servicios</h2>
          <p className="subtitle is-4">
            Soluciones integrales de bienestar adaptadas a tus necesidades
            únicas.
          </p>
        </div>

        <div className="columns is-multiline">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
