import React from 'react';
import styled from "styled-components";
import location from '../../../../assets/icon/location.svg'
import phone from '../../../../assets/icon/phone.svg'
import email from '../../../../assets/icon/email.svg'
export function ContactInfo() {
    return (
        <StyledContactInfo>
            <ul>
                <li><a href={"/#"}>Location <span>Mashhad/Iran</span></a></li>
                <li><a href={"tel:989150063913"}>Phone <span>+989150063913</span></a></li>
                <li><a href={"mailto:example@mail.com"}>Email <span>example@mail.com</span></a></li>
            </ul>
        </StyledContactInfo>
    );
}

const StyledContactInfo = styled.div
    `
        ul{
            display: grid;
            gap: 35px;
        }
        li{
            font-family: Roboto, sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 22px;
            padding-left: 60px;
        }
        li:nth-child(1) {
            background: url(${location}) no-repeat;
        }
        li:nth-child(2) {
            background: url(${phone}) no-repeat;
        }
        li:nth-child(3) {
            background: url(${email}) no-repeat;
        }
        
        span{
            font-family: Roboto, sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            color: #8b8b8b;
            display: block;
            transition: color .3s;
        }
        a:hover span{
            color: #fff;
        }
    `
