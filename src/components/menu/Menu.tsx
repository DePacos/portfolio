import React from 'react';
import styled from "styled-components";

import {MenuData} from "../../App";


type MenuPropsType = {
    menuData: MenuData[];
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuData.map((e) => {
                    return <li key={e.id}><a href={e.link}>{e.name}</a></li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav
    `
    ul{
        display: flex;
        gap: 55px;
        margin-right: 65px;
    }
    a{
        display: block;
        font-family: Roboto, sans-serif;
        font-size: calc((100vw - 320px) / (1920 - 320) * (16 - 8) + 8px);
        font-weight: 400;
        color: ${({theme})=> theme.colors.fontLight};
        transition: transform .4s;
    } 
    a:hover{
        transform: scale(1.15);
    }
    `