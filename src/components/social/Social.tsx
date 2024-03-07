import React from 'react';
import styled, {css} from "styled-components";

type SocialPropsType={
    iconLink1?: string
    iconLink2?: string
    iconLink3?: string
    position?: string
}
export const Social = (props: SocialPropsType) => {
    return (
        <StyledSocial position={props.position}>
            <li><a href="#"><img src={props.iconLink1} alt={"Social-Instagram"}/></a></li>
            <li><a href="#"><img src={props.iconLink2} alt={"Social-WhatsApp"}/></a></li>
            <li><a href="#"><img src={props.iconLink3} alt={"Social-Telegram"}/></a></li>
        </StyledSocial>
    );
};

const StyledSocial = styled.ul<SocialPropsType>
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
                    background-color: #24335c;
                    justify-content: start;
                    width: max-content;
                    padding: 24px 14px;
                    border-radius: 0 25px 25px 0;
                    
                    position: fixed;
                    bottom: 210px;
                    z-index: 1;
                `}

    `