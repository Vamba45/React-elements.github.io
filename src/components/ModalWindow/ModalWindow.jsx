import './ModalWindow.scss';

import React from 'react';

export default function ModalWindow () {
    const [open, setOpen] = React.useState(false);

    return (
       <>
        <button onClick={() => setOpen(true)} className="open-modal-btn">
            Открыть окно
        </button>
        <Modal open={open} setOpen={setOpen}>
            <img src="../../assets/img/obs.webp" alt="" />
        </Modal>
       </>
    )
}

function Modal ({open, setOpen, children}) {
    return (
        <div className={`overlay animated ${open && "show"}`}>
            <div className="modal">
                <div onClick={() => setOpen(false)} className="icon"></div>
                {children}
            </div>
        </div>
    )
}
