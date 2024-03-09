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
const StyledHeader = styled.header
    `   padding: 0 15px;
        background: ${({theme}) => theme.colors.bgHeaderDark};
    `