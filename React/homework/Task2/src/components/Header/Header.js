import { NavBar } from '../NavBar/NavBar';
import './Header.scss';

export const Header = ({ translations }) => (
    <header className="header">
        <div className="header__info">
            <h1 className="header__title">User profiles</h1>

            <p className="header__text">
                Here you can overview the user profiles
            </p>
        </div>

        <div className="header__controls">
            <div className="header__translations-wrapper">
                <button type="button" className="header__button">
                    Add new translation
                </button>

                <div className="header__translations">
                    {translations.map(({ id, text }) => (
                        <button
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
