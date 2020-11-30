import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './Page.scss';

export const Page = ({ translations, children }) => (
    <div className="page">
        <Header translations={translations} />
        <main className="page__main">{children}</main>
        <Footer />
    </div>
);
