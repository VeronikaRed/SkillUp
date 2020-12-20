import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './NavBar.scss';

const LINKS = [
    [
        { id: 1, url: '/', text: 'Home' },
        { id: 2, url: '/office', text: 'Office' },
        { id: 3, url: '/admin', text: 'Admin Panel' }
    ]
];

export const NavBar = () => {
    const { translation } = useContext(AppContext);
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {LINKS[translation.id].map(({ id, url, text }) => (
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
