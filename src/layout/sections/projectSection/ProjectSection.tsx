import React from 'react';
import styled from "styled-components";
import {StyledTitle} from "../../../components/title/Title";
import ProjectSimple from "./projectSimple/ProjectSimple";
import {ProjectButton} from "./projectSimple/ProjectButton";

type ProjectSectionPropsType = {
    skillsButtonData: Array<string>,
}

export function ProjectSection(props: ProjectSectionPropsType) {
    return (
        <StyledProjectSection>
            <StyledTitle>Project</StyledTitle>
            <ProjectButton skillsButtonData={props.skillsButtonData}/>
            <ProjectSimple/>
        </StyledProjectSection >
    );
}

const StyledProjectSection = styled.section
    `
        max-width: 1200px;
        margin: 0 auto;
    `

