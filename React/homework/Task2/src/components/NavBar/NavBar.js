import './NavBar.scss';

// Эти данные подлежат редактированию,
// но ссылки должны остаться те же и в том же количестве
const LINKS = [
    { id: 1, url: '/', text: 'Home' },
    { id: 2, url: '/office', text: 'Office' },
    { id: 3, url: '/admin', text: 'Admin Panel' }
];

export const NavBar = () => (
    <nav className="navbar">
        <ul className="navbar__list">
            {LINKS.map(({ id, url, text }) => (
                <li key={id} className="navbar__item">
                    <a href={url} className="navbar__link">
                        {text}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);
