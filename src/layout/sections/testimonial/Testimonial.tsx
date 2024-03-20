import React from 'react';
import {StyledTitle} from "../../../components/title/Title";
import {Slider} from "../../../components/slider/Slider";
import {S} from "./Testimonial_Styles";
import {TestimonialData} from "../../../App";

type TestimonialPropsType = {
    testimonialData: TestimonialData[],
}

export const Testimonial: React.FC<TestimonialPropsType> = (props: TestimonialPropsType) => {
    return (
        <S.TestimonialSection id="testimonial">
            <S.Container>
                <StyledTitle>Testimonial</StyledTitle>
                <Slider testimonialData={props.testimonialData}/>
            </S.Container>
        </S.TestimonialSection>
    )
        ;
}

