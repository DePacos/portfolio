import React from 'react';
import {StyledTitle} from "../../../components/title/Title";
import {Slider} from "../../../components/slider/Slider";
import {S} from "./TestimonialSection-Styles";

export const TestimonialSection: React.FC = () => {
    return (
        <S.TestimonialSection>
         <StyledTitle>Testimonial</StyledTitle>
         <Slider/>
        </S.TestimonialSection>
    );
}

