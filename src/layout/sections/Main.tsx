import React from 'react';
import styled from "styled-components";
import {MainSection} from "./mainSection/MainSection";
import {SkillsSection} from "./skillsSection/SkillsSection";
import {ProjectSection} from "./projectSection/ProjectSection";

type MainPropsType = {
    skillsData: {
        id: number;
        iconId: string;
        name: string;
    }[],
    skillsButtonData: Array<string>,
}

export function Main(props: MainPropsType) {
    return (
        <main>
            <MainSection/>
            <SkillsSection
                skillsData={props.skillsData}
            />
            <ProjectSection skillsButtonData={props.skillsButtonData}/>
        </main>
    );
}