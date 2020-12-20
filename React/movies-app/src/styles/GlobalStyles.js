import { createGlobalStyle } from 'styled-components';

const applyFontFamily = ({ theme }) => theme.defaultFontFamily;
export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    height: 100%;
    color: ${props => props.theme.defaultColor}
}

html{
    font-size: 62.5%;  // 10px => 1rem
    height: 100%;
}

body, button, input, textarea{
    font-size: 1.6rem;
    font-weight: 500;
    font-family: ${applyFontFamily};
}

button{
    cursor: pointer;
}

input, button{
    outline: 0
}

li{
    list-style-type: none
}

#root{
    height: 100%
}
img{
     display: block;
     width: 100%
}
`;
