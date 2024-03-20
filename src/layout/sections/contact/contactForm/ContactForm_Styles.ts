import styled from "styled-components";
import {Button} from "../../../../components/button/Button";

const ContactForm = styled.form
    `
        max-width: 430px;

        input,
        textarea {
            font-family: Roboto, sans-serif;
            font-size: 13px;
            font-weight: 400;
            line-height: 17px;
            padding-left: 25px;
            height: 36px;
            background-color: ${({theme}) => theme.bg.formInputBg};
            color: ${({theme}) => theme.colors.fontColor};
            border: none;
            border-radius: 9px;
        }

        input::placeholder,
        textarea::placeholder{
            color: #a5a5a5;
        }
        
        input:focus-visible,
        textarea:focus-visible{
            outline: 2px solid #988d80;
        }

        textarea {
            width: 100%;
            height: 152px;
            margin-bottom: 35px;
            padding-top: 17px;
        }

        @media screen and (max-width:991px) {
            max-width: 590px;
            width: 100%;
            margin-bottom: 45px;
            padding: 50px 80px;
            border-radius: 20px;
            box-shadow: 8px 8px 34px rgba(0, 0, 0, .2);
            background-color: ${({theme}) => theme.bg.formWrapBg};
        }

        @media ${({theme}) => theme.media.tabletMax} {  ;
            padding: 30px 50px;
        }
     
    `

const FormTitle = styled.h3
    `
        font-family: Roboto, sans-serif;
        font-size: calc((100vw - 320px) / (1920 - 320) * (36 - 30) + 30px);
        font-weight: 700;
        line-height: 49px;
        margin-bottom: 23px;
        color: ${({theme}) => theme.colors.fontColor};
        
        @media ${({theme}) => theme.media.mobileMax} {
            text-align: center;
        }
    `

const WrapInput = styled.div
    `
        display: grid;
        grid-template-columns: 211px 211px;
        gap: 7px;
        margin-bottom: 25px;
        
        @media screen and (max-width:991px) {
        grid-template-columns: 50% 50%;
        }
        
        @media ${({theme}) => theme.media.mobileMax} {  ;
        grid-template-columns: auto;
        }
    `

const FormButton = styled(Button)
    `
        font-family: Roboto, sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        display: block;
        width: 117px;
        height: 43px;
        border-radius: 9px;
        color: #fff;
        cursor: pointer;
        transition: transform .4s;

        &:hover {
            transform: scale(1.07);
        }
    `
export const S = {
    ContactForm,
    FormTitle,
    WrapInput,
    FormButton,
}