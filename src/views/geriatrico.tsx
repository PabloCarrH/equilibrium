import React from "react";

const Geriatrico: React.FC = () => {
    return (
        <div className="bg-brand-100 w-full h-full flex flex-col justify-center items-center flex-shrink-0 max-sm:pt-4 md:gap-4">
            <h2 className="font-semibold text-3xl text-brand-400 md:w-5/6 max-sm:justify-center max-sm:text-xl">Equilibrium Centro Geriatrico</h2>
            <div className="w-5/6 max-sm:h-full flex justify-center gap-y-2 items-center h-3/4 overflow-hidden relative">
                <div className="bg-brand-400 w-11/12 h-full flex justify-evenly items-center md:px-2 max-md:gap-x-4 max-sm:h-5/6 px-4 max-sm:flex-col max-sm:pt-6 max-sm:pb-4 max-sm:gap-y-4">
                    <div className="bg-brand-300 w-5/12 h-4/5 flex items-center justify-center max-sm:w-3/4 max-sm:h-2/5">
                        <h2>Imagén de servicio</h2>
                    </div>
                    <div className="flex flex-col w-6/12 h-4/5 max-w-96 relative gap-y-3 max-sm:gap-y-1  max-sm:w-5/6 max-sm:h-3/5 md:ml-2">
                        <h2 className="text-xl font-semibold max-md:text-base">Centro Geriatrico</h2>
                        <p className="text-base max-md:text-xs">Nuestro Centro Geriátrico ofrece un ambiente cálido y acogedor donde los adultos mayores pueden disfrutar de una atención personalizada y profesional. Contamos con instalaciones modernas y un equipo de profesionales dedicados a proporcionar cuidados de alta calidad, promoviendo el bienestar físico, emocional y social de nuestros residentes. Ofrecemos una variedad de servicios, incluyendo atención médica, actividades recreativas, y programas de rehabilitación, todo diseñado para mejorar la calidad de vida de nuestros mayores. Ven y descubre un lugar donde la dignidad y el respeto son nuestra prioridad.</p>
                        <p className="text-base max-md:text-xs font-thin">Horarios de atención: Lunes a Sabado: 8AM - 8PM</p>
                        <button className="bg-brand-200 rounded-lg px-3 py-2 max-w-fit absolute bottom-0 right-0 text-brand-500 font-semibold text-base max-md:text-sm hover:bg-brand-100">Más información</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Geriatrico;