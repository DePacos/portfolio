import React from 'react';
import styled from "styled-components";
export const Logo = () => {
    return (
        <StyledLogo href="#">GL</StyledLogo>
    );
};

const StyledLogo = styled.a
    `
        font-family: Amita, sans-serif;
        font-size: 60px;
        font-weight: 700;
        line-height: 60px;
    `
