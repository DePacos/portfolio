import styled from "styled-components";
import {Button} from "../../../components/button/Button";
import {MainContainer} from "../../../components/container/MainContainer";

const MainSection = styled.section
    `
        background: ${({theme}) => theme.bg.headerBg};
        padding: 170px 0 20px 0;
        margin-bottom: 60px;

        @media ${({theme}) => theme.media.tabletMax} {
            padding: 130px 0 20px 0;
        }
    }
    `

const Container = styled(MainContainer)
    `
        position: relative;
        background: ${({theme}) => theme.icon.mainEllipse} bottom right;

        &::before {
            content: '';
            display: block;
            position: absolute;
            z-index: 1;
            top: -55px;
            background: ${({theme}) => theme.icon.mainCross} right;
            width: 460px;
            height: 107px;
            @media ${({theme}) => theme.media.mobileMax} {
                width: 100%;
                right: 20%;
            }
        }
    `
const Wrap = styled.div
    `
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        align-items: center;
        padding: 40px 20px;
        backdrop-filter: blur(8px);
        color: ${({theme}) => theme.colors.fontColor};
        background: ${({theme}) => theme.bg.bgMainTitle};
        border: 2px solid ${({theme}) => theme.border.mainBorder};
        border-radius: 200px 0;
        z-index: 1;
        @media ${({theme}) => theme.media.tabletMax} {
            grid-template-columns: auto;
            max-width: 590px;
            margin: auto;
            padding: 60px 20px;
            text-align: center;
        }
    }
    `

const WrapLink = styled.div
    `
        display: grid;
        grid-template-columns: 200px 1fr;
        align-items: center;
        gap: 32px;

        @media screen and (max-width: 991px) {
            grid-template-columns: auto;
            max-width: 200px;
        }
        @media ${({theme}) => theme.media.tabletMax} {
            margin: auto;
        }
    `

const DownloadBtn = styled(Button)
    `
        font-family: Roboto, sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        background-color: transparent;
        color: ${({theme}) => theme.colors.linkMainColor};
        transition: color 0.4s;

        &:hover {
            color: ${({theme}) => theme.colors.fontColor};
        }
    `
const Link = styled.div
    `
        &:first-child {
            border-radius: 20px;
            position: relative;
            background-color: ${({theme}) => theme.bg.bgButton};
            color: ${({theme}) => theme.colors.fontLight};
            transition: transform 0.4s;
            cursor: pointer;

            &:hover {
                transform: scale(1.05);
            }
        }

        &:first-child a {
            font-family: Roboto, sans-serif;
            font-size: 15px;
            font-weight: 500;
            line-height: 22px;
            color: #fff;
            display: inline-block;
            padding: 16px 36px;
            text-align: left;
            width: 100%;
        }

        &:first-child svg {
            position: absolute;
            right: 35px;
            transform: translateY(50%);
        }
    `
export const S = {
    MainSection,
    Container,
    Wrap,
    WrapLink,
    DownloadBtn,
    Link,
}