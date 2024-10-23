import { Sparkles, Flower2, Waves } from 'lucide-react';
import { FeatureCard } from './feature-card';

const services = [
  {
    name: 'Tratamientos Faciales', // Add the name property
    title: 'Tratamientos Faciales',
    description:
      'Revitaliza tu piel con nuestros tratamientos faciales especializados.',
    icon: Sparkles,
  },
  {
    name: 'Tratamientos Corporales', // Add the name property
    title: 'Tratamientos Corporales',
    description:
      'Experiencia de renovación total con masajes terapéuticos y envolturas corporales.',
    icon: Flower2,
  },
  {
    name: 'Servicios de SPA', // Add the name property
    title: 'Servicios de SPA',
    description:
      'Sumérgete en la relajación con nuestros servicios de spa premium.',
    icon: Waves,
  },
];

const Services: React.FC = () => {
  return (
    <section className="section full-height" id="services">
      <div className="container full-height-container">
        <h2 className="title is-2">Nuestros Servicios</h2>
        <div className="columns is-multiline">
          {services.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
