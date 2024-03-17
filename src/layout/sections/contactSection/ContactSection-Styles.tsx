import styled from "styled-components";

const ContactSection = styled.section
    `
        margin-bottom: 65px;
        padding: 0 30px;
    `

const WrapForm = styled.div
    `
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        justify-items: end;
        align-items: center;
        max-width: 930px;
        margin: 0 auto 120px auto;
        padding: 50px 80px;
        border-radius: 20px;
        background-color: ${({theme}) => theme.bg.formWrapBg};
        
        @media screen and (max-width: 991px) {
            grid-template-columns: auto;
            justify-items: center;
            padding: 0;
        }

        @media screen and (min-width: 992px) {
        box-shadow: 8px 8px 34px rgba(0, 0, 0, .2);
    `

export const S = {
    ContactSection,
    WrapForm,
}
