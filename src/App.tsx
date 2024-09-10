import React from "react";
import "./index.css";
import Card from "./components/card.tsx";
import CardCarousel from "./components/carrousel.tsx";
const App: React.FC = () => {
    const cards = Array(5).fill(Card);
    return (
        <div className="relative bg-brand-100 w-screen h-screen flex flex-col items-center justify-center">
            <CardCarousel cards={cards} title="Servicios de SPA" />
        </div>
    );
};

export default App;