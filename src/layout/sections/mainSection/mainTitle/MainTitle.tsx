import React from 'react';
import styled from "styled-components";

export function MainTitle() {
    return (
        <>
            <StyledSpan>Hi There
                <span> I am
                    <StyledName> Gregory Lazarev</StyledName>
                </span>
            </StyledSpan>
            <StyledTitle>A Frontend Developer</StyledTitle>
        </>
    );
}

const StyledTitle = styled.h1
    `
        font-family: Roboto, sans-serif;
        font-size: 34px;
        font-weight: 700;
        margin-bottom: 40px;
    `

const StyledSpan = styled.span
`
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 500;

    > span {
        display: block;
        font-size: 50px;
    }

`

const StyledName = styled.span`
    color: ${({theme}) => theme.colors.bgButton};
        
`