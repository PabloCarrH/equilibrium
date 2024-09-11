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
        <div className="w-full h-max max-sm:h-28 flex justify-between py-2 items-center px-8 flex-shrink-0 bg-brand-100">
            <div className="flex flex-col items-start justify-center gap-y-0 text-brand-400 max-md:text-xs h-max py-2">
                <h3>{name}</h3>
                <p>Sede: {sede}</p>
                <p>Consultorio: {consultorio}</p>
                <p>Fecha: {date}</p>
                <p>Hora: {time}</p>
            </div>
            <button className="bg-brand-300 text-base hover:bg-brand-200 h-fit py-1 px-2 rounded-md hover:text-brand-500 hover:font-semibold max-md:text-sm">Agendar</button>
        </div>

    )
}
export default DateCard