import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
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