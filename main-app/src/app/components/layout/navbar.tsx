import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className="navbar is-fixed-top is-dark has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <Leaf className="mr-2" size={24} color="#00d1b2" />
            <span className="has-text-weight-semibold is-size-4 has-text-white">
              Equilibrium
            </span>
          </Link>

          <button
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={isActive ? 'true' : 'false'}
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="navbar-item has-text-white" // Cambiado a texto blanco
                onClick={() => setIsActive(false)} // Cierra el menú al hacer clic
              >
                {item.name}
              </Link>
            ))}
            <div className="navbar-item">
              <Link
                to="/book"
                className="button is-primary" // Botón mantiene el color primario
                onClick={() => setIsActive(false)} // Cierra el menú al hacer clic
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
