import React from "react";
import ReactDOM from "react-dom";
type ModalProps = {
    children: React.ReactNode
    open: boolean
    onClose: () => void
}
const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <div onClick={onClose} className="fixed inset-0 flex justify-center items-center transition-colors bg-brand-300/30 z-50">
            <div className="w-6/12 h-4/6 bg-brand-100 text-brand-300 p-4 max-sm:w-9/12 max-sm:h-4/5 relative" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-2 right-2 text-2xl bg-transparent hover:bg-brand-600/40 px-2 " onClick={onClose}>X</button>
                <h2 className="font-semibold text-2xl max-sm:text-lg">Horarios disponibles</h2>
                <p className="text-sm max-sm:text-xs">Selecciona el día y la hora que más te convenga</p>
                <div className="max-sm:mt-2 mt-4 flex flex-col gap-y-2 w-full h-5/6 overflow-y-scroll items-center flex-shrink-0">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
}

export default Modal;