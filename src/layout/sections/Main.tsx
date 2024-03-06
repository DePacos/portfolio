import React from 'react';
import {MainSection} from "./mainSection/MainSection";
import {SkillsSection} from "./skillsSection/SkillsSection";
import {ProjectSection} from "./projectSection/ProjectSection";

import {SkillsData, ProjectData} from "../../App";

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
        </main>
    );
}