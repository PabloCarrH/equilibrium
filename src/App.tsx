import React from "react";
import "./index.css";
import CardCarousel from "./components/carrousel.tsx";
const App: React.FC = () => {
    return (
        <div className="relative bg-brand-100 w-screen h-screen flex flex-col items-center justify-center">
            <CardCarousel />
        </div>
    );
};

export default App;