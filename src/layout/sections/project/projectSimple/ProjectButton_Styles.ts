import styled from "styled-components";
import {Button} from "../../../../components/button/Button";


const WrapProjectButton = styled.ul
    `
        display: grid;
        grid-template-columns: repeat(auto-fit, 160px);
        gap: 30px;
        justify-content: space-around;
        justify-items: center;
        margin-bottom: 45px;

        ::-webkit-scrollbar-thumb {
            background-color: red;
        }

        ::-webkit-scrollbar-track {
            background: orange;
        }

        scrollbar-color: ${({theme}) => theme.bg.bgSocIcon} #c2c2c2;
        scrollbar-width: thin;


        @media screen and (max-width: 991px) {
            grid-template-columns: repeat(4, 160px);
            justify-content: start;
            overflow-x: auto;
            padding-bottom: 10px;
        }
    `

const ProjectButton = styled(Button)
    `
        font-family: Roboto, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 27px;
        text-transform: capitalize;
        width: 159px;
        height: 42px;
        color:${({theme}) => theme.colors.fontColor};
        border: 3px solid ${({theme}) => theme.border.projBtnBorder};
        border-radius: 67px;
        background-color: ${({theme}) => theme.bg.bgColor};
        cursor: pointer;
        transition: all .4s;
        
        &.active,
        &:hover{
            background-color: ${({theme}) => theme.bg.skillsBgIcon};
            border: 3px solid ${({theme}) => theme.bg.skillsBgIcon};
        }
    `

export const S = {
    WrapProjectButton,
    ProjectButton,
}