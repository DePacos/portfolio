import styled from "styled-components";
import {Button} from "../../../../components/button/Button";

const ProjectSimple = styled.ul
    `
        display: grid;
        column-gap: 30px;
        row-gap: 50px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 260px));
        justify-content: center;

        li {
            display: grid;
            grid-template-rows: 240px 1fr;
            border-radius: 26px;
            overflow: hidden;
            padding-bottom: 25px;
            box-shadow: 0 4px 7px rgba(0, 0, 0, .15);
            background-color: ${({theme}) => theme.bg.projectBg};

            & > :last-child {
                display: grid;
                align-content: space-between;
            }
        }

        img {
            width: 100%;
            height: 240px;
            object-fit: cover;
        }

        h3 {
            font-family: Kalameh, sans-serif;
            font-size: 22px;
            font-weight: 700;
            line-height: 30px;
            max-width: 204px;;
            margin: 17px auto 25px auto;
            color: ${({theme}) => theme.colors.fontProjColor};
        }
    `

const WrapProjectLinks = styled.div
    `
        display: grid;
        grid-template-columns: 109px 74px;
        gap: 20px;
        justify-content: center;
        align-items: center;
    `

const ProjectButton = styled(Button)
    `
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        width: 109px;
        height: 29px;
        border-radius: 12px;
        background-color: ${({theme}) => theme.bg.projectBtnBg};
        color: #353535;
        cursor: pointer;
        transition: all 0.4s;
        
        &:hover{
            background-color: #2157f2;
            color: #fff;
        }
    `

const ProjectLink = styled.a
    `
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: ${({theme}) => theme.colors.linkProjColor};
        transition: color 0.4s;
        &:hover{
            color: ${({theme}) => theme.colors.fontColor};
        }
    `

export const S = {
    ProjectSimple,
    WrapProjectLinks,
    ProjectButton,
    ProjectLink,
}