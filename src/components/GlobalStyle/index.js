import { createGlobalStyle } from "styled-components"
import BoldFont from "../../../static/fonts/bold.otf"
import RegFont from "../../../static/fonts/reg.otf"

export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: "Helvetica Neue Bd";
    src: url(${RegFont});
    }
    @font-face {
    font-family: "Helvetica Neue BdIt";
    src: url(${BoldFont});
    }
    * {
        font-family: "Helvetica Neue Bd";
        font-weight: normal;
    }
    html, body {
        margin: 0;
    }
    ::selection {
        color: orange;
    }
`
