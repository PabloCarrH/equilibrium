import React from "react";
import Card from "./card.tsx";

const CardCarousel: React.FC = () => {
    return(
        <div className="flex items-center h-5/6 w-full relative justify-center">
            <button className="btn-carousel">←</button>
            <div className="w-5/6 max-sm:h-full flex justify-start gap-y-2 items-center h-4/5 overflow-hidden relative">
                <Card />
                <Card />
            </div>
            <button className="btn-carousel">→</button>
        </div>
    )
}

export default CardCarousel