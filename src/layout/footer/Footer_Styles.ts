import styled from "styled-components";

const Footer = styled.footer
    `
    display: grid;
    align-content: end;
    text-align: center;
    height: 240px;
    background: ${({theme}) => theme.bg.footerBgImg};
    background-position: center;
    small{
        display: block;
    }
    small:nth-child(1){
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        margin-bottom: 7px;
        color: ${({theme}) => theme.colors.fontLight};
    }
    small:nth-child(2){
        font-family: Inter, serif;
        font-size: 11px;
        font-weight: 400;
        line-height: 14px;
        margin-bottom: 75px;
        color: ${({theme}) => theme.colors.fontLight};
    }
    @media ${({theme}) => theme.media.tabletMax}{
        height: 150px;
        small:nth-child(2){
            margin-bottom: 40px;
        }
    }
`

export const S = {
    Footer,
}