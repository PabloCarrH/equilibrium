import React from "react";
import { RxDoubleArrowDown } from "react-icons/rx";
import { Container } from "../components/container.tsx";

const Intro:React.FC = () => {
    return (
        <Container className="flex-col items-center justify-center text-brand-400">
            <h1 className="text-9xl max-sm:text-6xl max-md:text-8xl font-lobster mb-4">Equilibrium</h1>
            <p className="text-lg max-md:text-base max-sm:text-sm max-sm:text-balance font-poppins font-semibold">Salud y bienestar en perfecta armonía</p>
            <a href="" className="absolute bottom-4 size-16 flex justify-center items-center">
                <RxDoubleArrowDown className="text-5xl max-sm:text-4xl animate-bounce"/>
            </a>
        </Container>
    );
}

export default Intro;