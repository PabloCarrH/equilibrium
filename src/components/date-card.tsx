import React from "react";

const DateCard: React.FC = () => {
    return(
        <div className="w-full h-2/6 max-sm:h-28 flex justify-between py-2 items-center px-8 flex-shrink-0 bg-brand-100">
            <div className="flex flex-col items-start justify-center gap-y-0 text-brand-400 max-md:text-xs">
                <h3>Cristhian David Tapiero</h3>
                <p>Sede: Chapinero</p>
                <p>Consultorio: 203</p>
                <p>Fecha: 12/12/2024</p>
                <p>Hora: 10:00am </p>
            </div>
            <button className="bg-brand-300 hover:bg-brand-200 h-fit py-1 px-2 rounded-md hover:text-brand-500 hover:font-semibold max-md:text-sm">Agendar</button>
        </div>

    )
}
export default DateCard