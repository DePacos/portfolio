import React from 'react';
import styled from "styled-components";
import {StyledButton} from "../../../../components/button/Button";

export function ContactForm() {
    return (
        <>
            <StyledForm>
                <StyledFormTitle>Get in touch</StyledFormTitle>
                <StyledWrapInput>
                    <input type={"email"} placeholder={"Email"}/>
                    <input placeholder={"Phone"}/>
                </StyledWrapInput>
                <label hidden id="message">Message</label>
                <textarea  aria-labelledby="message" placeholder="Message"/>
                <StyledFormButton type={"submit"}>Send</StyledFormButton>
            </StyledForm>
        </>
    );
}

const StyledForm = styled.form
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
            background-color: #393838;
            border: none;
            border-radius: 9px;
        }

        input::placeholder,
        textarea::placeholder{
            color: #a5a5a5;
        }

        textarea {
            width: 100%;
            height: 152px;
            margin-bottom: 35px;
            padding-top: 17px;
        }

    `
const StyledFormTitle = styled.h3
    `
        font-family: Roboto, sans-serif;
        font-size: 36px;
        font-weight: 700;
        line-height: 49px;
        margin-bottom: 23px;
    `
const StyledWrapInput = styled.div
    `
        display: grid;
        grid-template-columns: 211px 211px;
        gap: 7px;
        margin-bottom: 25px;
    `
const StyledFormButton = styled(StyledButton)
    `
        font-family: Roboto, sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        display: block;
        width: 117px;
        height: 43px;
        border-radius: 9px;
        cursor: pointer;
        transition: transform .4s;

        &:hover {
            transform: scale(1.05);
        }
    `