import styled from 'styled-components';

export const StyledImageWrapper = styled.div`
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    margin-right: ${props => props.theme.margin.md};
`;
