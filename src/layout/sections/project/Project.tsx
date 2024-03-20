import React from 'react';
import {S} from "./Project_Styles";
import {StyledTitle} from "../../../components/title/Title";
import {ProjectSimple} from "./projectSimple/ProjectSimple";
import {ProjectButton} from "./projectSimple/ProjectButton";

import {ProjectData} from "../../../App";

type ProjectSectionPropsType = {
    skillsButtonData: Array<string>,
    projectData: ProjectData[];
}

export const Project: React.FC<ProjectSectionPropsType> = (props: ProjectSectionPropsType) => {
    return (
        <S.ProjectSection id="projects">
            <S.Container>
                <StyledTitle>Project</StyledTitle>
                <ProjectButton skillsButtonData={props.skillsButtonData}/>
                <ProjectSimple projectData={props.projectData}/>
            </S.Container>
        </S.ProjectSection>
    );
}

