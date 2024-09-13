import React from "react";
import "./index.css";
import Intro from "./views/intro.tsx";
const App: React.FC = () => {
    
    return (
        <div className="relative w-screen h-screen flex flex-col items-center justify-center flex-shrink-0 overflow-x-hidden bg-brand-100">
            <Intro/>
        </div>
    );
};

export default App;