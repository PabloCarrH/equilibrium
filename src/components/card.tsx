import React from "react";

const Card: React.FC = () => {
    return (
        <div className="bg-brand-400 w-11/12 min-w-full h-full flex justify-evenly items-center md:px-2 max-md:gap-x-4 max-sm:h-5/6 max-sm:w-5/6 max-sm:flex-col max-sm:pt-6 max-sm:pb-4 max-sm:gap-y-4">
            <div className="bg-brand-300 w-2/5 h-4/5 flex items-center justify-center max-sm:w-3/4 max-sm:h-2/5"> 
                <h2>Imagén de servicio</h2>
            </div>
            <div className="flex flex-col w-3/5 h-4/5 max-w-96 relative gap-y-3 max-sm:gap-y-2 max-sm:w-3/4 max-sm:h-3/5 md:ml-2">
                <h2 className="text-xl font-semibold max-sm:text-lg">Tratamiento facial ($70k)</h2>
                <p className="text-lg max-sm:text-base">Un tratamiento personalizado para rejuvenecer y revitalizar tu piel. Limpieza profunda, exfoliación, extracción de impurezas, masaje facial y mascarilla adaptada a tus necesidades.</p>
                <p className="text-base max-sm:text-sm font-thin md:mt-4">Horarios de atención: Lunes a viernes de 8am a 10pm <br />Fines de semana y festivos de 10am a 8pm</p>
                <button className="bg-brand-100 rounded-lg px-4 py-2 max-w-fit absolute bottom-0 right-0 text-brand-500 font-semibold text-lg">Agendar cita</button>
            </div>   
        </div>
    );
};
export default Card