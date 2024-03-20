import React from 'react';
import {Hero} from "./hero/Hero";
import {Skills} from "./skills/Skills";
import {Project} from "./project/Project";

import {SkillsData, ProjectData, TestimonialData} from "../../App";
import {Contact} from "./contact/Contact";
import {Social} from "../../components/social/Social";

import instagram from '../../assets/icon/insta-white.svg'
import wa from '../../assets/icon/wa-white.svg'
import telegram from '../../assets/icon/telegram-white.svg'
import {Testimonial} from "./testimonial/Testimonial";

type MainPropsType = {
    skillsData: SkillsData[],
    skillsButtonData: Array<string>,
    projectData: ProjectData[],
    testimonialData: TestimonialData[],
}

export function Main(props: MainPropsType) {
    return (
        <main>
            <Hero/>
            <Skills
                skillsData={props.skillsData}
            />
            <Project
                skillsButtonData={props.skillsButtonData}
                projectData={props.projectData}
            />
            <Testimonial testimonialData={props.testimonialData}/>
            <Contact/>
            <Social position={'main'} iconLink1={instagram} iconLink2={wa} iconLink3={telegram}/>
        </main>
    );
}