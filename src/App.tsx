import React from "react";
import "./index.css";
import Intro from "./views/intro.tsx";
import Contact from "./views/contact.tsx";
import Main from "./views/main.tsx";
const App: React.FC = () => {
    
    return (
        <div>
            <Intro/>
            <Main/>
            <Contact/>
        </div>
    );
};

export default App;