import React from "react";

const Geriatrico: React.FC = () => {
    return (
        <div className="flex justify-center max-sm:justify-evenly gap-y-2 items-center w-full h-5/6 max-sm:h-fit flex-col">
            <h2 className="font-semibold font-poppins text-center text-xl text-brand-400 md:w-5/6 max-sm:justify-center max-sm:text-lg">Equilibrium Centro Geriatrico</h2>
            <div className="flex items-center h-full w-full relative justify-center gap-2">
                <div className="w-5/6 max-sm:h-full flex justify-center gap-y-2 items-center h-5/6 overflow-hidden relative">
                    <div className="bg-brand-400/40 w-11/12 max-sm:h-fit flex justify-evenly items-center md:px-2 max-md:gap-x-4 h-full px-4 max-sm:flex-col max-sm:py-4 max-sm:gap-y-1 text-brand-100">
                        <div className="bg-brand-400 w-5/12 h-4/5 max-sm:aspect-square flex items-center justify-center max-sm:w-2/4 max-sm:h-2/5">
                            <h2>Imagén de servicio</h2>
                        </div>
                        <div className="flex flex-col w-6/12 h-4/5 max-w-96 relative gap-y-1 max-sm:w-5/6 max-sm:h-3/5 md:ml-2">
                            <h2 className="text-xl font-semibold max-md:text-base">Centro Geriatrico</h2>
                            <p className="text-sm max-md:text-xs">Nuestro Centro Geriátrico ofrece un ambiente cálido y acogedor donde los adultos mayores pueden disfrutar de una atención personalizada y profesional. Promovemos el bienestar físico, emocional y social de nuestros residentes. Ofrecemos una gran variedad de servicios médicos, actividades recreativas, y programas de rehabilitación. Ven y descubre un lugar donde la dignidad y el respeto son nuestra prioridad.</p>
                            <p className="text-xs font-thin">Pregunta por nuestros canales virtuales</p>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Geriatrico;