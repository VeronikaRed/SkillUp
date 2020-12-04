import { createPortal } from 'react-dom';
import './Modal.scss';

export const Modal = ({ children, onClickOk, translRef }) => {
    console.log(children);
    return createPortal(
        <div className="backDrop">
            <div className="modal">
                {children}
                <input
                    ref={translRef}
                    onClick={event => event.stopPropagation()}
                />
                <button onClick={onClickOk}>ok</button>
            </div>
        </div>,
        document.getElementById('portal-root')
    );
};
