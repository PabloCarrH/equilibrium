import React from "react";
import { Container } from "../components/container.tsx";
import Tabs from "../components/tabpanel.tsx";


const Main:React.FC = () => {
    return (
        <Container className="flex-col items-center justify-end text-brand-400" id="main-section">
            <h1 className="text-6xl max-sm:text-5xl font-lobster mb-4">Servicios</h1>
            <Tabs/>
        </Container>
    );
}

export default Main;