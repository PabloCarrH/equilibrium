import React from 'react';

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};
export const Container: React.FC<ContainerProps> = ({ children, className, id }) => {
    return (
        <div id={id} className="relative w-screen h-screen flex flex-col items-center justify-center flex-shrink-0 overflow-x-hidden bg-brand-100">
            <div className={`relative flex bg-brand-500/40 w-5/6 h-5/6 rounded-3xl flex-shrink-0 ${className}`}>
                <img src="./images/SPA_logo.png" alt="Logo" className='absolute left-2 top-2 aspect-square size-24 max-sm:size-20' />
                {children}
            </div>
        </div>
    )
};