import React from 'react';
import styled from "styled-components";
import {StyledTitle} from "../../../components/title/Title";
import ProjectSimple from "./projectSimple/ProjectSimple";
import {ProjectButton} from "./projectSimple/ProjectButton";

import {ProjectData} from "../../../App";

type ProjectSectionPropsType = {
    skillsButtonData: Array<string>,
    projectData: ProjectData[];
}

export function ProjectSection(props: ProjectSectionPropsType) {
    return (
        <StyledProjectSection>
            <StyledTitle>Project</StyledTitle>
            <ProjectButton skillsButtonData={props.skillsButtonData}/>
            <ProjectSimple projectData={props.projectData}/>
        </StyledProjectSection>
    );
}

const StyledProjectSection = styled.section
    `  max-width: 1200px;
       margin: 0 auto;
       margin-bottom: 15px;
    `

