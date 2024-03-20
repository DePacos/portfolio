import styled, {css} from "styled-components";

import {OffsetPropsType} from './Header'
import {Button} from "../../components/button/Button";

const Header = styled.header<OffsetPropsType>
    `
        background: ${({theme}) => theme.bg.headerBg};
        position: fixed;
        z-index: 3;
        top: 0;
        left: 0;
        right: 0;
        border-radius: 0 0 20px 20px;

        @media ${({theme}) => theme.media.tabletMax} {
            z-index: 5;
        }
        
        ${props => props.offset > 80 && css <OffsetPropsType>
                `
                 & > div {
                     transition: all 0.5s;
                     padding: 10px 35px;
                 }
                 `
         }
    `

const Container = styled.div
    `
        display: grid;
        grid-template-columns: 60px 1fr 36px;
        align-items: center;
        justify-items: end;
        max-width: 1440px;
        margin: auto;
        padding: 30px 30px 0 30px;
        transition: all 0.5s;
        }

        @media ${({theme}) => theme.media.tabletMax} {
            grid-template-columns: 30px 1fr 36px;
            justify-items: center;
            padding: 15px;
            & button:first-of-type {
                order: -1
            }
        }
    `

const ChangeThemeBtn = styled(Button)
    `
        background-color: transparent;
    `
export const S = {
    Header,
    Container,
    ChangeThemeBtn
}