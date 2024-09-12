import React from "react";
import CardCarousel from "../components/carrousel.tsx";
import Card from "../components/card.tsx";

const Salud: React.FC = () => {
    const info = [{
        name: "Masaje relajante",
        price: "500",
        description: "Masaje de cuerpo completo",
        dates: [
            {
                name: "Juan Perez",
                sede: "Sede 1",
                consultorio: "Consultorio 1",
                date: "2021-10-10",
                time: "10:00",
            },
            {
                name: "Maria Lopez",
                sede: "Sede 2",
                consultorio: "Consultorio 2",
                date: "2021-10-12",
                time: "12:00",
            },
        ],},
        {
        name: "Masaje reductor",
        price: "700",
        description: "Masaje reductor de abdomen",
        dates: [
            {
                name: "Juan Lopez",
                sede: "Sede 1",
                consultorio: "Consultorio 1",
                date: "2021-10-10",
                time: "10:00",
            },
            {
                name: "Maria Perez",
                sede: "Sede 2",
                consultorio: "Consultorio 2",
                date: "2021-10-12",
                time: "12:00",
            },
            {
                name: "Cristhian Tapiero",
                sede: "Sede 1",
                consultorio: "Consultorio 1",
                date: "2024-11-09",
                time: "13:00"
            }
        ],},
    ]
    const cards: JSX.Element[] = [];
    for (let i = 0; i < info.length; i++) {
        cards.push(<Card name={info[i].name} price={info[i].price} description={info[i].description} dates={info[i].dates} image="default.jpg" schedule="9:00 AM - 5:00 PM" />)
    }
    return (
        <div className="bg-brand-100 w-full h-full flex justify-center items-center flex-shrink-0">
            <CardCarousel title="Equilibrium Centro de Servicios de Salud Integral" cards={cards}/>
        </div>
    );
}
export default Salud;