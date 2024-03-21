import React from 'react';
import {S} from "./ProjectButton_Styles";
import {ProjectsButtonData} from "../../../../App";


export type ProjectButtonPropsType = {
    projectsButtonData: ProjectsButtonData[],
    setTypeProjects: (v: string) => void,
    typeProject: string,
}

export const ProjectButton: React.FC<ProjectButtonPropsType> = (props: ProjectButtonPropsType) => {
    return (

        <S.WrapProjectButton>
            {props.projectsButtonData.map((e => {return(
             <li key={e.id}><S.ProjectButton
                 className={`${e.title}` === `${props.typeProject}` ? 'active' : ''}
                 onClick={() => props.setTypeProjects(e.title)}>{e.title}
             </S.ProjectButton></li>
            )}))}
        </S.WrapProjectButton>
    );
}
