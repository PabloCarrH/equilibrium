import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      content:
        'El enfoque holístico en Equilibrio ha transformado mi viaje de bienestar. Su equipo de expertos brinda un cuidado excepcional.',
      author: 'Sarah Johnson',
      role: 'Entusiasta del Bienestar',
      rating: 5,
    },
    {
      content:
        'Servicios médicos sobresalientes combinados con un ambiente de spa. Es el equilibrio perfecto entre salud y relajación.',
      author: 'Michael Chen',
      role: 'Profesional de Negocios',
      rating: 5,
    },
    {
      content:
        'Los servicios de atención geriátrica han sido invaluables para mi padre. El personal es compasivo y altamente capacitado.',
      author: 'Emma Rodriguez',
      role: 'Cuidadora Familiar',
      rating: 5,
    },
  ];

  return (
    <section className="section has-background-light" id="testimonials">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-2">Lo que dicen nuestros clientes</h2>
          <p className="subtitle is-4">
            Experiencias reales de nuestros valiosos clientes
          </p>
        </div>

        <div className="columns">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="column is-4">
              <div className="card testimonial-card">
                <div className="card-content">
                  <div className="mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="star-rating"
                        size={20}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="mb-4">{testimonial.content}</p>
                  <div>
                    <p className="has-text-weight-bold">{testimonial.author}</p>
                    <p className="is-size-7">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
