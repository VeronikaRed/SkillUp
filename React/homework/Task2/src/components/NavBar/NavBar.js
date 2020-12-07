import { useContext } from 'react';
import { AppContext } from '../App/App';
import './NavBar.scss';

export const NavBar = () => {
    const { translation, links } = useContext(AppContext);
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {links[translation].map(({ id, url, text }) => (
                    <li key={id} className="navbar__item">
                        <a href={url} className="navbar__link">
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
