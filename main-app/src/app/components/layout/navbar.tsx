import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <Leaf className="mr-2" size={24} color="#fff" />
            <span className="has-text-weight-semibold is-size-4">
              Equilibrium
            </span>
          </Link>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              <button className="button is-success">Inicio</button>
            </Link>
            <Link to="/services" className="navbar-item">
              Servicios Estéticos
            </Link>
            <Link to="/health-services" className="navbar-item">
              Servicios de Salud
            </Link>
            <Link to="/geriatric-center" className="navbar-item">
              Centro Geriátrico
            </Link>
            <Link to="/booking" className="navbar-item">
              Reservas
            </Link>
            <Link to="/blog" className="navbar-item">
              Blog
            </Link>
            <Link to="/testimonials" className="navbar-item">
              Testimonios
            </Link>
            <Link to="/contact" className="navbar-item">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
