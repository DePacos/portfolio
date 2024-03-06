import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icons/Icon";
import styled from "styled-components";

import {MenuData} from "../../App";

export type HeaderPropsType = {
    menuData: MenuData[];
}

export const Header = (props: HeaderPropsType) => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuData={props.menuData}/>
            <Icon iconId={'moon'} size={'36'} viewBox={'0 0 90 90'}/>
        </StyledHeader>

    );
};

const StyledHeader = styled.header
    `
        display: grid;
        grid-template-columns: 70px 1fr 36px;
        align-items: center;
        justify-items: end;
        padding: 35px 40px 75px 40px;
        background: linear-gradient(90deg, rgba(36, 51, 92, 1) 30%, rgba(255, 255, 255, 0) 30%);

    `
