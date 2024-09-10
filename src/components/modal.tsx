import React from "react";
import ReactDOM from "react-dom";
type ModalProps = {
    children: React.ReactNode
    open: boolean
    onClose: () => void
}
const Modal:React.FC<ModalProps> = ({children, open, onClose}) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <div onClick={onClose} className="fixed inset-0 flex justify-center items-center transition-colors bg-black/20 z-50">
            {children}
        </div>,
        document.body
    );
}

export default Modal;