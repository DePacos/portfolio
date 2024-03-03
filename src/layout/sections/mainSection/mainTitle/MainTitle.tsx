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
        font-family: Roboto-Bold;
        font-size: 34px;
        margin-bottom: 40px;
    `

const StyledSpan = styled.span
`
    font-family: Roboto-Medium;
    font-size: 24px;

    > span {
        display: block;
        font-size: 50px;
    }

`

const StyledName = styled.span`
    color: #2157f2;
        
`