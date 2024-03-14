import React from 'react';
import styled from "styled-components";

import {MenuData} from "../../App";


type DesktopMenuPropsType = {
    menuData: MenuData[];
}

export const DesktopMenu = (props: DesktopMenuPropsType) => {
    return (
        <StyledDesktopMenu>
            <ul>
                {props.menuData.map((e) => {
                    return <li key={e.id}><a href={e.link}>{e.name}</a></li>
                })}
            </ul>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.nav
    `
        a {
            display: block;
            //font-size: calc((100vw - 320px) / (1920 - 320) * (16 - 8) + 8px);
            font-size: 16px;
            color: ${({theme}) => theme.colors.fontLight};
            transition: transform .4s;
        }

        ul {
            display: flex;
            gap: 55px;
            margin-right: 65px;
        }

        a:hover {
            transform: scale(1.15);
        }

        @media ${({theme}) => theme.media.tabletMax} {
            display: none;
        }
    `