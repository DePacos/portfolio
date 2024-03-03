import React from 'react';
import styled from "styled-components";
export const Logo = () => {
    return (
        <StyledLogo href="#">GL</StyledLogo>
    );
};

const StyledLogo = styled.a
    `
        font-family: Amita-Bold;
        font-size: 60px;
        line-height: 60px;
    `
