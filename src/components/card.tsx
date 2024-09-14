import React, {useState} from "react";
import Modal from "./modal.tsx";
import DateCard, { DateCardProps } from "./date-card.tsx";
type CardProps = {
    image: string,
    name: string,
    price: string,
    description: string,
    schedule: string,
    dates: DateCardProps[],
}
const Card: React.FC<CardProps> = ({name, price, description, schedule, dates}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-brand-400/40 w-11/12 h-full flex justify-evenly items-center md:px-2 max-md:gap-x-4 max-sm:h-5/6 max-sm:flex-col max-sm:pt-6 max-sm:pb-4 max-sm:gap-y-4 text-brand-100">
            <div className="bg-brand-400 w-5/12 h-4/5 flex items-center justify-center max-sm:w-3/4 max-sm:h-2/5"> 
                <h2>Imagén de servicio</h2>
            </div>
            <div className="flex flex-col w-6/12 h-4/5 max-w-96 relative gap-y-3 max-sm:gap-y-1  max-sm:w-5/6 max-sm:h-3/5 md:ml-2">
                <h2 className="text-xl font-semibold max-md:text-base">{name} (${price})</h2>
                <p className="text-lg max-md:text-sm">{description}</p>
                <p className="text-base max-md:text-xs font-thin md:mt-4">Horarios de atención: Lunes a Sabado: {schedule}</p>
                <button className="bg-brand-300/60 rounded-lg px-3 py-2 max-w-fit absolute bottom-0 right-0 text-brand-100 font-semibold text-base max-md:text-sm hover:bg-brand-300/30" onClick={() => setOpen(true)}>Agendar cita</button>
                <Modal open={open} onClose={()=>setOpen(false)}>
                    {dates.map((date, index) => (
                        <DateCard key={index} name={date.name} sede={date.sede} consultorio={date.consultorio} date={date.date} time={date.time}/>
                    ))}
                </Modal>
            </div>   
        </div>
    );
};
export default Card