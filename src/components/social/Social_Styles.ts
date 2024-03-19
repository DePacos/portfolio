import styled, {css} from "styled-components";

import {SocialPropsType} from './Social'

const Social = styled.ul<SocialPropsType>
    `
        display: grid;
        grid-template-columns: 33px 33px 33px;
        justify-content: center;
        gap: 22px;

        a {
            display: inline-block;
            transition: transform .3s;

            &:hover {
                transform: scale(1.1);
            }
        }

        ${props => props.position === 'main' && css <SocialPropsType>
                `
                    grid-template-columns: auto;
                    background-color: ${({theme}) => theme.bg.bgSocIcon};
                    justify-content: start;
                    width: max-content;
                    padding: 24px 14px;
                    border-radius: 0 25px 25px 0;
                    
                    position: fixed;
                    bottom: 210px;
                    z-index: 1;
                `}
    `

export const S = {
    Social,
}