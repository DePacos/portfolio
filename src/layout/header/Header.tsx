import React, {useState, useEffect} from 'react';
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "../../components/menu/DesktopMenu";
import {Icon} from "../../components/icons/Icon";
import styled, {css} from "styled-components";

import {MenuData} from "../../App";
import {StyledButton} from "../../components/button/Button";
import {MobileMenu} from "../../components/menu/MobileMenu";

export type HeaderPropsType = {
    menuData: MenuData[];
}

type StyledHeaderPropsType = {
    offset: number
}

export const Header = (props: HeaderPropsType) => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);

    return (
        <StyledHeader offset={offset}>
            <StyledContainer>
                <Logo/>
                <DesktopMenu menuData={props.menuData}/>
                <MobileMenu menuData={props.menuData}/>
                <StyledChangeStyleBtn>
                    <Icon iconId={'moon'} size={'36'} viewBox={'0 0 90 90'}/>
                </StyledChangeStyleBtn>
            </StyledContainer>
        </StyledHeader>

    );
};


const StyledContainer = styled.div
    `
        display: grid;
        grid-template-columns: 70px 1fr 36px;
        align-items: center;
        justify-items: end;
        max-width: 1360px;
        margin: auto;
        padding: 35px 0 75px 0;
        
        @media ${({theme}) => theme.media.tabletMax} {
            justify-items: center;
            padding: 10px 0;
            & > a{
                order: 1
            }
            & > button{
                order: 2
            }
        }
    `
const StyledHeader = styled.header<StyledHeaderPropsType>
    `   padding: 0 15px;
        background: linear-gradient(90deg,rgba(36,51,92,1) 30%,rgba(34,34,34,1) 30%);
        position: fixed;
        z-index: 3;
        max-width: 1440px;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;

        & > div{
            transition: all 0.5s;
        }

        @media ${({theme}) => theme.media.tabletMax} {
            z-index: 5;
        }
        
    ${props => props.offset > 80 && css <StyledHeaderPropsType>
        `
                border-radius: 0 0 20px 20px;
            & > div{
                padding: 10px 0;
            }
        `
}
    `

const StyledChangeStyleBtn = styled(StyledButton)
`
    background-color: transparent;
`