import styled from "styled-components";

const MainTitle = styled.h1
    `
        font-family: Roboto, sans-serif;
        font-size: calc((100vw - 320px) / (1920 - 320) * (34 - 25) + 25px);
        font-weight: 700;
        margin-bottom: 40px;
    `

const Wrap = styled.span
    `
        font-family: Roboto, sans-serif;
        font-size: calc((100vw - 320px) / (1920 - 320) * (24 - 16) + 16px);
        font-weight: 500;
        display: block;
        margin-bottom: 25px;

        > span {
            display: block;
            font-size: calc((100vw - 320px) / (1920 - 320) * (50 - 36) + 36px);
        }
    `

const Name = styled.span
    `
    color: ${({theme}) => theme.colors.fontNameColor};
        @media screen and (max-width: 1200px){
            display: block;
        }
        @media ${({theme}) => theme.media.tabletMax} {
           margin-bottom: 10px;
        }
    }
`

export const S = {
    MainTitle,
    Wrap,
    Name,
}
