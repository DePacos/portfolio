import React, {useState, useEffect} from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icons/Icon";
import styled, {css} from "styled-components";

import {MenuData} from "../../App";

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
                <Menu menuData={props.menuData}/>
                <Icon iconId={'moon'} size={'36'} viewBox={'0 0 90 90'}/>
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

    
    ${props => props.offset > 80 && css <StyledHeaderPropsType>
        `
                border-radius: 0 0 20px 20px;
            & > div{
                padding: 10px 0;
            }
        `
}
        
    `