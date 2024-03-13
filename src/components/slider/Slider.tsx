import React from 'react';
import {Carousel} from "react-responsive-carousel";
import styled from "styled-components";

import testimonialPhoto from '../../assets/images/testi-face.webp'
export function Slider() {
    return (
        <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
        >
            <StyledWrapSlide>
                <img src={testimonialPhoto} alt="Testimonial"/>
                <span>Michal John</span>
                <p>Quote testimonials demonstrate support for your product or feature from a user who has experience
                    with it. This can be significantly more effective than traditional advertising methods as most
                    consumers will trust.</p>
            </StyledWrapSlide>
            <StyledWrapSlide>
                <img src={testimonialPhoto} alt="Testimonial"/>
                <span>Michal John</span>
                <p>Quote testimonials demonstrate support for your product or feature from a user who has experience
                    with it. This can be significantly more effective than traditional advertising methods as most
                    consumers will trust.</p>
            </StyledWrapSlide>
            <StyledWrapSlide>
                <img src={testimonialPhoto} alt="Testimonial" />
                <span>Michal John</span>
                <p>Quote testimonials demonstrate support for your product or feature from a user who has experience
                    with it. This can be significantly more effective than traditional advertising methods as most
                    consumers will trust.</p>
            </StyledWrapSlide>
        </Carousel>
    );
}

const StyledWrapSlide = styled.div
`
    margin-bottom: 60px;
    span{
        font-family: Roboto, sans-serif;
        font-weight: 500;
        font-size: 26px;
        display: block;
        margin-bottom: 10px;
    }
    .slider-wrapper & img{
        width: 100px;
        margin-bottom: 30px;
        border-radius: 50%;
    }
    p{
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
`