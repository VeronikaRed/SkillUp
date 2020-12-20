import styled from 'styled-components/macro';

const padding = '1.55rem';

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    border-radius: 0.3rem;
    border: none;
    padding: ${props => `${padding} ${props.theme.padding.sm}`};
`;
