import React from 'react';
import {Carousel} from "react-responsive-carousel";
import {S} from "./Slider-Styles";

import testimonialPhoto from '../../assets/images/testi-face.webp'
export const Slider: React.FC = () => {
    return (
        <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
        >
            <S.Slide>
                <img src={testimonialPhoto} alt="Testimonial"/>
                <span>Michal John</span>
                <p>Quote testimonials demonstrate support for your product or feature from a user who has experience
                    with it. This can be significantly more effective than traditional advertising methods as most
                    consumers will trust.</p>
            </S.Slide>
            <S.Slide>
                <img src={testimonialPhoto} alt="Testimonial"/>
                <span>Michal John</span>
                <p>Quote testimonials demonstrate support for your product or feature from a user who has experience
                    with it. This can be significantly more effective than traditional advertising methods as most
                    consumers will trust.</p>
            </S.Slide>
            <S.Slide>
                <img src={testimonialPhoto} alt="Testimonial" />
                <span>Michal John</span>
                <p>Quote testimonials demonstrate support for your product or feature from a user who has experience
                    with it. This can be significantly more effective than traditional advertising methods as most
                    consumers will trust.</p>
            </S.Slide>
        </Carousel>
    );
}
