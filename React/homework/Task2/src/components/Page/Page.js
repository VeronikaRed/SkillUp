import { useState, useRef } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { TranslateForm } from '../TranslateForm/TranslateForm';
import { TranslationBtn } from '../TranslationBtn/TranslationBtn';
import { Modal } from '../Modal/Modal';
import './Page.scss';

const TRANSLATIONS = [
    {
        id: 0,
        text: 'en'
    },
    {
        id: 1,
        text: 'ru'
    },
    {
        id: 2,
        text: 'ua'
    }
];
export const Page = ({ children }) => {
    const [showTranslMode, setShowTranslMode] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [translArea, setTranslArea] = useState(null);
    const [clickValue, setClickValue] = useState(null);

    const refContainer = useRef();
    const refTranslation = useRef();

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
    const handleGetTranslation = () => {
        return refTranslation.current.value;
    };

    return (
        <div
            className="page"
            onClick={showTranslMode ? handleMenuTranslate : null}
        >
            <Header
                onToggleEditMode={handleToggleEditMode}
                translations={TRANSLATIONS}
            />
            {showTranslMode && <TranslateForm transRef={refTranslation} />}
            <main className="page__main">{children}</main>
            {showTranslMode && (
                <TranslationBtn
                    onGetTranslation={handleGetTranslation}
                    changeFlag={setShowTranslMode}
                    translations={TRANSLATIONS}
                />
            )}
            <Footer />
            {showModal && (
                <Modal onClickOk={handleClickOk} translRef={refContainer}>
                    {translArea}
                </Modal>
            )}
        </div>
    );
};
