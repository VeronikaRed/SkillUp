import styled from 'styled-components';

export const StyledWidthLimiter = styled.div`
    max-width: ${props => props.theme.maxWidth};
    width: 100%;
    margin: 0 auto;
`;
