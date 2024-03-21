import React from 'react';
import {S} from "./Project_Styles";
import {StyledTitle} from "../../../components/title/Title";
import {ProjectSimple} from "./projectSimple/ProjectSimple";
import {ProjectButton} from "./projectSimple/ProjectButton";

import {ProjectData, ProjectsButtonData} from "../../../App";

type ProjectSectionPropsType = {
    projectsButtonData: ProjectsButtonData[],
    projectData: ProjectData[];
}

export const Project: React.FC<ProjectSectionPropsType> = (props: ProjectSectionPropsType) => {

    const [typeProject, setTypeProjects] = React.useState<string>('all')
    let filterProject = props.projectData

    if(typeProject !== 'all'){
        filterProject = props.projectData.filter((e) => typeProject === e.type)
    }

    return (
        <S.ProjectSection id="projects">
            <S.Container>
                <StyledTitle>Project</StyledTitle>
                <ProjectButton
                    typeProject={typeProject}
                    setTypeProjects={setTypeProjects}
                    projectsButtonData={props.projectsButtonData}/>
                <ProjectSimple
                    projectData={filterProject}/>
            </S.Container>
        </S.ProjectSection>
    );
}

