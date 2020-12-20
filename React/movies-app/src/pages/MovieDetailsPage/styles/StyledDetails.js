import styled from 'styled-components';

export const StyledDetails = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-image: url(${props => props.$imageUrl});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.5rem;
    padding: ${props => props.theme.padding.md};
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: ${props => props.theme.darkColors[800]};
        border-radius: 0.5rem;
    }
`;
