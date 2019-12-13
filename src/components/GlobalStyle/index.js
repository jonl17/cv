import { createGlobalStyle } from "styled-components"
import BoldFont from "../../../static/fonts/bold.otf"
import RegFont from "../../../static/fonts/reg.otf"

export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: "Helvetica Neue Bd";
    src: url(${RegFont});
    }
    * {
        font-family: "Helvetica Neue Bd";
    }
    html, body {
        margin: 0;
    }
    ::selection {
        color: orange;
    }
`
