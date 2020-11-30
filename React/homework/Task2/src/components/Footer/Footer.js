import './Footer.scss';

export const Footer = () => (
    <footer className="footer">
        <div className="footer__newsletter">
            <div className="footer__input-wrapper">
                <label>Subscribe to our newsletter</label>

                <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    className="input"
                />
            </div>

            <button type="button" className="button">
                Subscribe
            </button>
        </div>
    </footer>
);
