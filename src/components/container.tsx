import React from 'react';

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};
export const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`relative flex bg-brand-500/40 w-5/6 h-5/6 rounded-3xl ${className}`}>
            <img src="./images/SPA_logo.png" alt="Logo" className='absolute left-2 top-2 aspect-square size-24 max-sm:size-20'/>
            {children}
        </div>
    )
};