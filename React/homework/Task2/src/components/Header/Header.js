import { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { NavBar } from '../NavBar/NavBar';
import './Header.scss';

const HEADER_INFORMATION = [
    {
        btn: 'Add new translation',
        headText: 'User profiles',
        text: 'Here you can overview the user profiles'
    }
];

export const Header = ({ onToggleEditMode, translations }) => {
    const { translation, setTranslation } = useContext(AppContext);
    const { headText, text, btn } = HEADER_INFORMATION[translation.id];
    const handleChangeTranslationId = event => {
        setTranslation(
            translation
                .filter(item => item.text === event.target.value)
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
                        {translations.map(({ id, text }) => (
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
