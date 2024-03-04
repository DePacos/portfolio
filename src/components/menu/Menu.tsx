import React from 'react';
import styled from "styled-components";


export const Menu = (props: {menuItems: Array<any>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((e, ) => {
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
        font-family: Roboto-Regular;
        font-size: 16px;
        color: ${({theme})=> theme.colors.font};
        transition: transform .4s;
    } 
    a:hover{
        transform: scale(1.15);
    }
    `