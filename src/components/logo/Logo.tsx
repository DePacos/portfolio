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
        font-size: calc((100vw - 320px) / (1920 - 320) * (60 - 40) + 40px);
        font-weight: 700;
        line-height: 60px;
    `
