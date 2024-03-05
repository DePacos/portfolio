import React from 'react';
import styled from "styled-components";
import {StyledTitle} from "../../../components/title/Title";
import {SkillSimple} from "./skillSimple/SkillSimple";
import dots from "../../../assets/icon/dots.svg"

export type SkillsSectionPropsType = {
    skillsData: {
        id: number;
        iconId: string;
        name: string;
    }[],
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
        background: url(${dots}) no-repeat left center;
    `
