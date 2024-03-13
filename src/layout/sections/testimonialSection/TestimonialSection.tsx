import React from 'react';
import {StyledTitle} from "../../../components/title/Title";
import {Slider} from "../../../components/slider/Slider";
import styled from "styled-components";

export function TestimonialSection() {
    return (
        <StyledSection>
         <StyledTitle>Testimonial</StyledTitle>
         <Slider/>
        </StyledSection>
    );
}

const StyledSection = styled.section
    `
        max-width: 560px;
        margin: 0 auto 60px auto;
    `