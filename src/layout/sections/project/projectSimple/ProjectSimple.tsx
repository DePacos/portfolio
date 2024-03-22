import React from 'react';
import {S} from "./ProjectSimple_Styles";

import {ProjectData} from "../../../../App";

import {CSSTransition, TransitionGroup} from "react-transition-group";

type ProjectSimpleTypeProps = {
    projectData: ProjectData[];
}

export const ProjectSimple: React.FC<ProjectSimpleTypeProps> = (props: ProjectSimpleTypeProps) => {
    return (
        <TransitionGroup component={S.ProjectSimple}>
            {props.projectData.map((e => {
                return (
                    <CSSTransition timeout={300} classNames="projectCard">
                        <li key={e.id}>
                            <img src={e.image} alt="project"/>
                            <div>
                                <h3>{e.title}</h3>
                                <S.WrapProjectLinks>
                                    <S.ProjectButton>Edit for you</S.ProjectButton>
                                    <S.ProjectLink href={e.link}>see preview</S.ProjectLink>
                                </S.WrapProjectLinks>
                            </div>
                        </li>
                    </CSSTransition>
                )
            }))}
        </TransitionGroup>
    );
}
