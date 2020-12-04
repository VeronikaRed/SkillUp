import { useState, useRef } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import {
    TranslateForm,
    CreateTranslateBtn
} from '../TranslateForm/TranslateForm';
import { Modal } from '../Modal/Modal';
import './Page.scss';

export const Page = ({ generalInfo, children }) => {
    const [showTranslMode, setShowTranslMode] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [translArea, setTranslArea] = useState(null);
    const [clickValue, setClickValue] = useState(null);

    const handleToggleEditMode = () => {
        setShowTranslMode(prevState => !prevState);
    };
    const handleMenuTranslate = event => {
        setClickValue(event);
        if (!event.target.innerHTML.includes('<')) {
            setTranslArea(event.target.innerHTML);
            setShowModal(true);
        }
    };
    const handleClickOk = event => {
        clickValue.target.innerHTML = refContainer.current.value;
        setShowModal(false);
        event.stopPropagation();
    };

    const refContainer = useRef();

    return (
        <div
            className="page"
            onClick={showTranslMode ? handleMenuTranslate : null}
        >
            <Header
                generalInfo={generalInfo}
                onToggleEditMode={handleToggleEditMode}
            />
            {showTranslMode && <TranslateForm />}
            <main className="page__main">{children}</main>
            {showTranslMode && <CreateTranslateBtn />}
            <Footer />
            {showModal && (
                <Modal onClickOk={handleClickOk} translRef={refContainer}>
                    {translArea}
                </Modal>
            )}
        </div>
    );
};
