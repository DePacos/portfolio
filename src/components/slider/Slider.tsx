import React from 'react';
import {Carousel} from "react-responsive-carousel";
import {S} from "./Slider_Styles";

import {TestimonialData} from "../../App";

type SliderPropsType = {
    testimonialData: TestimonialData[],
}
export const Slider: React.FC<SliderPropsType> = (props: SliderPropsType) => {
    return (
        <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
        >
                {props.testimonialData.map((e) => {
                    return <S.Slide key={e.id}>
                        <img src={e.image} alt="Testimonial"/>
                        <span>{e.name}</span>
                        <p>{e.testimonial}</p>
                    </S.Slide>
                })}
        </Carousel>
    );
}
