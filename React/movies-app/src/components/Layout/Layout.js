import PT from 'prop-types';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { StyledLayout, StyledMain, StyledMainWidthLimited } from './styles';

export const Layout = ({ children, ...other }) => (
    <StyledLayout>
        <Header {...other} />
        <StyledMain>
            <StyledMainWidthLimited>{children}</StyledMainWidthLimited>
        </StyledMain>
        <Footer />
    </StyledLayout>
);

Layout.propTypes = {
    children: PT.node.isRequired
};
