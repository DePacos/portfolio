import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icons/Icon";
import styled from "styled-components";


export const Header = () => {
    return (

        <StyledHeader>
            <Logo/>
            <Menu/>
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
        padding: 35px 35px 75px 35px;
        background: linear-gradient(90deg, rgba(36, 51, 92, 1) 30%, rgba(255, 255, 255, 0) 30%);

    `
