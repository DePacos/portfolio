import React from 'react';
import styled from "styled-components";
import {StyledTitle} from "../../../components/title/Title";
import {SkillSimple} from "./skillSimple/SkillSimple";
import dots from "../../../assets/icon/dots.svg"

import {SkillsData} from "../../../App";

type SkillsSectionPropsType = {
    skillsData: SkillsData[]
}
export function SkillsSection(props:SkillsSectionPropsType) {
    return (
        <StyledSection>
            <StyledTitle>Skills</StyledTitle>
            <SkillSimple
                skillsData={props.skillsData}
            />
        </StyledSection>
    );
}

const StyledSection = styled.section
    `   
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
        background: url(${dots}) no-repeat left center;
    `
