import React from 'react';

// Define la interfaz para los artículos
interface Article {
  id: number;
  title: string;
  content: string;
}

// Datos de artículos falsos
const articles: Article[] = [
  {
    id: 1,
    title: 'El Agua Mineral: El Nuevo Elixir de la Juventud',
    content: `Recientemente, un grupo de investigadores autoproclamados ha publicado un estudio que afirma que beber agua mineral puede revertir el envejecimiento. Según el estudio, aquellos que beben al menos dos litros al día pueden rejuvenecer hasta 20 años. Los investigadores advierten que debe ser agua mineral importada de una fuente secreta en los Alpes, y que el efecto es más potente si se bebe a la luz de la luna.`,
  },
  {
    id: 2,
    title: 'El Yoga de las Ranas: La Última Tendencia en Fitness',
    content: `Un nuevo tipo de yoga ha surgido y está arrasando en las redes sociales: el Yoga de las Ranas. Practicantes afirman que imitar los movimientos de las ranas mejora la flexibilidad y aumenta la energía. ¡Incluso hay un desafío viral donde debes saltar como una rana durante 30 segundos! Las escuelas de yoga de todo el mundo están adoptando esta tendencia.`,
  },
  {
    id: 3,
    title: 'Comer Aire: La Dieta del Futuro',
    content: `Una nueva dieta ha comenzado a ganar popularidad entre celebridades y gurús de la salud: la dieta de comer aire. Según sus seguidores, inhalar profundamente y “comer” aire no solo es saludable, sino que también es una forma de alcanzar la iluminación espiritual.`,
  },
  {
    id: 4,
    title: 'Terapia de Risoterapia con Gatos',
    content: `Los expertos en bienestar están promoviendo la “terapia de risoterapia con gatos” como la mejor solución para el estrés. La idea es simple: rodearse de gatos y reírse de sus travesuras. ¡No olvides grabar un video de tu gato haciendo algo gracioso!`,
  },
  {
    id: 5,
    title: 'Baños de Chocolate: La Nueva Spa Experiencia',
    content: `¿Te imaginas un spa donde en lugar de agua te sumerjas en chocolate derretido? Un nuevo spa ha abierto sus puertas ofreciendo baños de chocolate, que según ellos, no solo son relajantes, sino que también mejoran la salud de la piel.`,
  },
];

// Componente principal del blog
const FakeNewsBlog: React.FC = () => {
  return (
    <section className="section full-height" id="blog">
      <div className="container full-height-container">
        <h1 className="title has-text-centered">
          Blog de Noticias de Bienestar y Salud
        </h1>
        <div className="columns is-multiline">
          {articles.map((article) => (
            <div key={article.id} className="column is-4">
              <div className="card mb-4">
                <div className="card-content">
                  <h2 className="article-title title is-4">{article.title}</h2>
                  <p className="article-content">{article.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FakeNewsBlog;
