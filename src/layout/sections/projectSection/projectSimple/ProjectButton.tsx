import React from 'react';
import {S} from "./ProjectButton-Styles";


export type ProjectButtonPropsType = {
    skillsButtonData: Array<string>,
}

export const ProjectButton: React.FC<ProjectButtonPropsType> = (props: ProjectButtonPropsType) => {
    return (
        <S.WrapProjectButton>
            {props.skillsButtonData.map((name => {return(
             <li><S.ProjectButton>{name}</S.ProjectButton></li>
            )}))}
        </S.WrapProjectButton>
    );
}
