import styled from "styled-components";
import {MainContainer} from "../../../components/container/Container";

const ContactSection = styled.section
    `
        margin-bottom: 80px;
    `

const Container = styled(MainContainer)
    `
        max-width: 930px;
    `

const WrapForm = styled.div
    `
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        justify-items: end;
        align-items: center;
        padding: 50px 80px;
        margin-bottom: 120px;
        border-radius: 20px;
        background-color: ${({theme}) => theme.bg.formWrapBg};
        
        @media screen and (max-width: 991px) {
            grid-template-columns: auto;
            justify-items: center;
            padding: 0;
            background-color: transparent;
        }

        @media screen and (min-width: 992px) {
        box-shadow: 8px 8px 34px rgba(0, 0, 0, .2);
    `

export const S = {
    ContactSection,
    WrapForm,
    Container,
}
