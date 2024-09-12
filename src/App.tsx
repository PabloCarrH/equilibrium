import React from "react";
import "./index.css";
import SPA from "./views/spa.tsx";
import Geriatrico from "./views/geriatrico.tsx";
import Salud from "./views/salud.tsx";
import Contact from "./views/contact.tsx";

const App: React.FC = () => {
    
    return (
        <div className="relative w-screen h-screen flex flex-col flex-shrink-0 overflow-x-hidden">
            <SPA/>
            <Salud/>
            <Geriatrico/>
            <Contact/>
        </div>
    );
};

export default App;