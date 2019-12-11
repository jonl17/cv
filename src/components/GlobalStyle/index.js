import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,600i,700,900&display=swap');
    * {
        font-family: "Monserrat", sans-serif;
        color: white;
    }
    html, body {
        margin: 0;
    }
    ::selection {
        color: orange;
    }
`
