import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['black-800']};
    color: ${(props) => props.theme['blue-300']};
  }

  body, input, button, textarea {
    font: 400 1rem 'Monrope', sans-serif;
  }

`
