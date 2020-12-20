import styled from 'styled-components/macro';

export const StyledFooter = styled.footer`
    padding: ${props => `${props.theme.padding.sm} ${props.theme.padding.md}`};
    background: ${props => props.theme.footer.background};
    color: ${props => props.theme.footer.color};
    text-align: center;
`;
