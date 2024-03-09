import React from 'react';
import styled from "styled-components";
import {StyledTitle} from "../../../components/title/Title";
import {ContactForm} from "./contactForm/ContactForm";
import {ContactInfo} from "./contactForm/ContactInfo";
import {Social} from "../../../components/social/Social";

import instagram from "../../../assets/icon/insta-color.svg"
import wa from "../../../assets/icon/wa-color.svg"
import telegram from "../../../assets/icon/telegram-color.svg"


export function ContactSection() {
    return (
        <StyledContactSection>
            <StyledTitle>Contact</StyledTitle>
            <StyledWrapForm>
                <ContactForm/>
                <ContactInfo/>
            </StyledWrapForm>
            <Social iconLink1={instagram} iconLink2={wa} iconLink3={telegram} />
        </StyledContactSection>
    );
}

const StyledContactSection = styled.section
    `
        margin-bottom: 65px;
        padding: 0 15px;
    `

const StyledWrapForm = styled.div
    `
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 125px;
        align-items: center;
        max-width: 930px;
        margin: 0 auto 120px auto;
        padding: 50px 80px;
        background-color: #2c2b2b;
    `
