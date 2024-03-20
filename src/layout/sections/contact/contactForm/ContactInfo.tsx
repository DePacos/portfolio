import React from 'react';
import {S} from "./ContactInfo_Styles";

export const ContactInfo: React.FC = () => {
    return (
        <S.ContactInfo>
            <ul>
                <li><a href={"/#"}>Location <span>Mashhad/Iran</span></a></li>
                <li><a href={"tel:989150063913"}>Phone <span>+989150063913</span></a></li>
                <li><a href={"mailto:example@mail.com"}>Email <span>example@mail.com</span></a></li>
            </ul>
        </S.ContactInfo>
    );
}
