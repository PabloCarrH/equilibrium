import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export function Footer() {
  const navigation = {
    services: [
      { name: 'Tratamientos Faciales', href: '/services/facial' },
      { name: 'Tratamientos Corporales', href: '/services/body' },
      { name: 'Servicios de Spa', href: '/services/spa' },
      { name: 'Servicios Médicos', href: '/services/medical' },
    ],
    company: [
      { name: 'Acerca de', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contacto', href: '/contact' },
      { name: 'Carreras', href: '/careers' },
    ],
    legal: [
      { name: 'Política de Privacidad', href: '/privacy' },
      { name: 'Términos del Servicio', href: '/terms' },
    ],
  };

  return (
    <footer
      className="footer has-background-dark"
      aria-labelledby="footer-heading"
    >
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <Link to="/" className="is-flex is-align-items-center">
              <Leaf className="mr-2" size={24} color="#00d1b2" />
              <span className="title has-text-white">Equilibrio</span>
            </Link>
            <p className="has-text-grey-light">
              Tu viaje hacia el bienestar comienza aquí. Experimenta la perfecta
              armonía de mente, cuerpo y espíritu.
            </p>
          </div>

          <div className="column is-8">
            <div className="columns">
              <div className="column">
                <h3 className="has-text-weight-semibold has-text-white">
                  Servicios
                </h3>
                <ul>
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="has-text-grey-light hover:has-text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="column">
                <h3 className="has-text-weight-semibold has-text-white">
                  Compañía
                </h3>
                <ul>
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="has-text-grey-light hover:has-text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="column">
                <h3 className="has-text-weight-semibold has-text-white">
                  Legal
                </h3>
                <ul>
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="has-text-grey-light hover:has-text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="content has-text-centered has-text-grey-light mt-5">
          <p>
            &copy; {new Date().getFullYear()} Equilibrio. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
