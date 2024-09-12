import React, { useState } from "react";
import Card from "./card.tsx";

type CardCarouselProps = {
    cards: JSX.Element[];
    title: string;
};

const CardCarousel: React.FC<CardCarouselProps> = ({ cards, title }) => {
    const [currentCard, setCurrentCard] = useState(0);
    const nextCard = () => {
        const isLastCard = currentCard === cards.length - 1;
        setCurrentCard((currentCard) => isLastCard ? 0 : currentCard + 1);
    }
    const prevCard = () => {
        const isFirstCard = currentCard === 0;
        setCurrentCard((currentCard) => isFirstCard ? cards.length - 1 : currentCard - 1);
    }

    return (
        <div className="flex justify-center items-center w-full h-full flex-col">
            <h2 className="font-semibold text-3xl text-brand-400 md:w-5/6 max-sm:justify-center max-sm:text-xl">{title}</h2>
            <div className="flex items-center h-5/6 w-full relative justify-center gap-2">
                <button className="btn-carousel" onClick={prevCard}>←</button>
                <div className="w-5/6 max-sm:h-full flex justify-start gap-y-2 items-center h-4/5 overflow-hidden relative">
                    <div className="flex transition-transform duration-500 ease-in-out h-full w-full relative items-center" style={{ transform: `translateX(-${currentCard * 100}%)` }}>
                        {cards.map((card, index) => (
                            <div key={index} className="w-full h-full flex items-center flex-shrink-0 relative justify-center">
                                <Card name={card.props.name} image={card.props.image} price={card.props.price} description={card.props.description} schedule={card.props.schedule} dates={card.props.dates}/>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={nextCard} className="btn-carousel">→</button>
            </div>
        </div>
    )
}

export default CardCarousel