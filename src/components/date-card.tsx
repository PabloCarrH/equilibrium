import React from "react";

export interface DateCardProps {
    name: string,
    sede: string,
    consultorio: string,
    date: string,
    time: string,
}

const DateCard: React.FC<DateCardProps> = ({name, sede, consultorio, date, time}) => {
    return(
        <div className="w-full h-max max-sm:h-28 flex justify-between py-2 items-center px-8 flex-shrink-0 bg-brand-400/55 rounded-xl">
            <div className="flex flex-col items-start justify-center gap-y-0 text-brand-100 max-md:text-xs h-max py-2">
                <h3>{name}</h3>
                <p>Sede: {sede}</p>
                <p>Consultorio: {consultorio}</p>
                <p>Fecha: {date}</p>
                <p>Hora: {time}</p>
            </div>
            <button className="bg-transparent border border-brand-100 text-brand-100 text-base hover:bg-brand-500 hover:border-none h-fit py-1 px-2 rounded-md hover:scale-105 transition-all max-md:text-sm">Agendar</button>
        </div>

    )
}
export default DateCard