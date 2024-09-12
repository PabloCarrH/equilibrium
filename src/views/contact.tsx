import React from "react";

const Contact: React.FC = () => {
    return (
        <div className="bg-brand-100 w-full h-full flex justify-center items-center flex-shrink-0">
            <div className="w-full max-sm:w-96 max-sm:h-96 rounded-md flex flex-col justify-center items-center gap-y-4 p-4">
                <h1 className="text-2xl font-semibold text-brand-400">Contacto</h1>
                <p className="text-base text-brand-300">Si deseas contactarnos, puedes hacerlo a través de:</p>
                <div className="flex flex-col gap-y-2">
                    <p className="text-base text-brand-300 flex gap-x-1">Correo: 
                        <a href="mailto:example@gmail.com" className="text-brand-400 font-semibold">example@equilibrium.com</a>
                    </p>
                    <p className="text-base text-brand-300 flex gap-x-1">Teléfono:
                        <a href="tel:1234567890" className="text-brand-400 font-semibold">+57 321 123 1234</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact