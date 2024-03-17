import React from 'react';
import {S} from "./ProjectSimple-Styles";

import {ProjectData} from "../../../../App";

type ProjectSimpleTypeProps = {
    projectData: ProjectData[];
}

export const ProjectSimple: React.FC<ProjectSimpleTypeProps> = (props: ProjectSimpleTypeProps) => {
    return (
        <S.ProjectSimple>
            {props.projectData.map((e => {
                return (
                    <li>
                        <img src={e.image} alt="project"/>
                        <div>
                            <h3>{e.title}</h3>
                            <S.WrapProjectLinks>
                                <S.ProjectButton>Edit for you</S.ProjectButton>
                                <S.ProjectLink href={e.link}>see preview</S.ProjectLink>
                            </S.WrapProjectLinks>
                        </div>
                    </li>
                )
            }))}
        </S.ProjectSimple>
    );
}
