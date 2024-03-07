import React from 'react';
import styled from "styled-components";
import footerBg from '../../assets/icon/footer-bg.svg'
export function Footer() {
    return (
        <StyledFooter>
            <span>Coded by Gregory Lazarev</span>
            <span>All Rights Reserved 2024</span>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer
`
    display: grid;
    align-content: end;
    text-align: center;
    height: 240px;
    padding-bottom: 75px;
    background: url(${footerBg}) no-repeat, linear-gradient(0deg,rgba(36,51,92,1) 40%,rgba(255,255,255,0) 10%);
    span{
        display: block;
    }
    span:nth-child(1){
        font-family: Inter-Bold, serif;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 7px;
    }
    span:nth-child(2){
        font-family: Inter-Regular, serif;
        font-size: 11px;
        line-height: 14px;
    }
`
