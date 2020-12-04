import { useState, useContext } from 'react';
import { AppContext } from '../App/App';
import { NavBar } from '../NavBar/NavBar';
import './Header.scss';

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
export const Header = ({ generalInfo, onToggleEditMode }) => {
    const [state, setState] = useState(TRANSLATIONS);
    const { setTranslation } = useContext(AppContext);
    const { headText, text, btn, language } = generalInfo;

    const handleChangeTranslationId = event => {
        setTranslation(
            TRANSLATIONS.filter(item => item.text === event.target.value)
                .map(item => item.id)
                .pop()
        );

        event.stopPropagation();
    };
    return (
        <header className="header">
            <div className="header__info">
                <h1 className="header__title">{headText}</h1>

                <p className="header__text">{text}</p>
            </div>

            <div className="header__controls">
                <div className="header__translations-wrapper">
                    <button
                        type="button"
                        className="header__button"
                        onClick={onToggleEditMode}
                    >
                        {btn}
                    </button>

                    <div className="header__translations">
                        {TRANSLATIONS.map(({ id, text }) => (
                            <button
                                onClick={handleChangeTranslationId}
                                key={id}
                                type="button"
                                className="header__translation"
                            >
                                {text}
                            </button>
                        ))}
                    </div>
                </div>

                <NavBar />
            </div>
        </header>
    );
};
