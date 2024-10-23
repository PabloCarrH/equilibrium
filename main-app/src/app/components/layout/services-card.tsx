import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="column is-one-third">
      <div className="box has-text-centered service-card">
        <Icon size={48} className="mb-3" />
        <h3 className="title is-4">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
