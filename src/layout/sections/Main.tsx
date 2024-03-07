import React from 'react';
import {MainSection} from "./mainSection/MainSection";
import {SkillsSection} from "./skillsSection/SkillsSection";
import {ProjectSection} from "./projectSection/ProjectSection";

import {SkillsData, ProjectData} from "../../App";
import {ContactSection} from "./contactSection/ContactSection";
import {Social} from "../../components/social/Social";

import instagram from '../../assets/icon/insta-white.svg'
import wa from '../../assets/icon/wa-white.svg'
import telegram from '../../assets/icon/telegram-white.svg'

type MainPropsType = {
    skillsData: SkillsData[],
    skillsButtonData: Array<string>,
    projectData: ProjectData[];
}

export function Main(props: MainPropsType) {
    return (
        <main>
            <MainSection/>
            <SkillsSection
                skillsData={props.skillsData}
            />
            <ProjectSection
                skillsButtonData={props.skillsButtonData}
                projectData={props.projectData}
            />
            <ContactSection/>
            <Social position={'main'} iconLink1={instagram} iconLink2={wa} iconLink3={telegram}/>
        </main>
    );
}