import styled from "styled-components";

const TestimonialSection = styled.section
    `
        .carousel-root .control-dots li{
            width: 12px;
            height: 12px;
            background-color: ${({theme}) => theme.colors.fontColor}; 
        }
        
        max-width: 600px;
        margin: 0 auto 80px auto;
        padding: 0 30px;
    `
export const S = {
    TestimonialSection,
}