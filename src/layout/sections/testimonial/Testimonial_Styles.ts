import styled from "styled-components";
import {MainContainer} from "../../../components/container/Container";

const TestimonialSection = styled.section
    `
        margin-bottom: 80px;
        
    `

const Container = styled(MainContainer)
`
    .carousel-root .control-dots li {
        width: 12px;
        height: 12px;
        background-color: ${({theme}) => theme.colors.fontColor};
    }

    max-width: 600px;
`
export const S = {
    TestimonialSection,
    Container
}