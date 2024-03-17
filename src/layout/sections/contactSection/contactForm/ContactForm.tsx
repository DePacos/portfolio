import React from 'react';
import {S} from "./ContactForm-Styles";


export const ContactForm: React.FC = () => {
    return (
            <S.ContactForm>
                <S.FormTitle>Get in touch</S.FormTitle>
                <S.WrapInput>
                    <input type={"email"} placeholder={"Email"}/>
                    <input placeholder={"Phone"}/>
                </S.WrapInput>
                <label hidden id="message">Message</label>
                <textarea  aria-labelledby="message" placeholder="Message"/>
                <S.FormButton type={"submit"}>Send</S.FormButton>
            </S.ContactForm>
    );
}