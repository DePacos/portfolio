import {createGlobalStyle} from "styled-components";
import {glTheme} from "./ThemeStyled";

export const GlobalStyles = createGlobalStyle
`
*,
*::before,
*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*{box-sizing: border-box; color: ${glTheme.colors.font};}
.App{background-color: ${glTheme.colors.bgBodyDark};}
a{text-decoration: none}
ul{list-style: none;}


`