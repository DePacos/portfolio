import React from 'react';
import {S} from "./ContactSection-Styles";
import {StyledTitle} from "../../../components/title/Title";
import {ContactForm} from "./contactForm/ContactForm";
import {ContactInfo} from "./contactForm/ContactInfo";
import {Social} from "../../../components/social/Social";

import instagram from "../../../assets/icon/insta-color.svg"
import wa from "../../../assets/icon/wa-color.svg"
import telegram from "../../../assets/icon/telegram-color.svg"


export function ContactSection() {
    return (
        <S.ContactSection>
            <StyledTitle>Contact</StyledTitle>
            <S.WrapForm>
                <ContactForm/>
                <ContactInfo/>
            </S.WrapForm>
            <Social iconLink1={instagram} iconLink2={wa} iconLink3={telegram} />
        </S.ContactSection>
    );
}




