// FeatureCard.js
import React from 'react';

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>; // Propiedad para el icono
  name: string; // Nombre de la característica
  description: string; // Descripción de la característica
}

export function FeatureCard({
  icon: Icon,
  name,
  description,
}: FeatureCardProps) {
  return (
    <div className="column is-one-third">
      <div className="box about has-text-centered about-feature is-primary is-outlined">
        <div className="about-feature-icon mb-3">
          <Icon className="is-size-4" />
        </div>
        <h3 className="title is-4">{name}</h3>
        <p className="subtitle is-6">{description}</p>
      </div>
    </div>
  );
}
