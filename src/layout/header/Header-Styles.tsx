import styled, {css} from "styled-components";

import {OffsetPropsType} from './Header'
import {Button} from "../../components/button/Button";

const Header = styled.header<OffsetPropsType>
    `
        padding: 0 40px;
        background: ${({theme}) => theme.bg.headerBg};
        position: fixed;
        z-index: 3;
        max-width: 1440px;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;

        & > div {
            transition: all 0.5s;
        }

        @media ${({theme}) => theme.media.tabletMax} {
            z-index: 5;
        }

        ${props => props.offset > 80 && css <OffsetPropsType>
                `
                    border-radius: 0 0 20px 20px;

                    & > div {
                        padding: 10px 0;
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
        max-width: 1360px;
        margin: auto;
        padding-top: 35px;

        @media ${({theme}) => theme.media.tabletMax} {
            grid-template-columns: 30px 1fr 36px;
            justify-items: center;
            padding: 15px 0;
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