import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle
`
    *,
    *::before,
    *::after {box-sizing: border-box; margin: 0; padding: 0;}
    *:focus-visible {outline: 3px solid #b97119;}
    * {box-sizing: border-box; }
    
    html{scroll-behavior: smooth; scroll-padding-top: 100px}
    body{font-family: Roboto, sans-serif; font-weight: 400;}
    a {text-decoration: none}
    ul {list-style: none;}
    
    .main-container{
        max-width: 1440px;
        margin: 0 auto;
    }
    
    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }

`