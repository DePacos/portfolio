import React from 'react';
import styled from "styled-components";
import {StyledTitle} from "../../../components/title/Title";
import {SkillSimple} from "./skillSimple/SkillSimple";
import dots from "../../../assets/icon/dots.svg"

const skillItems = [
    {iconId: 'htmlIcon', name: 'html'},
    {iconId: 'cssIcon', name: 'css'},
    {iconId: 'scssIcon', name: 'scss'},
    {iconId: 'jsIcon', name: 'js'},
    {iconId: 'reactIcon', name: 'react'},
    {iconId: 'reduxIcon', name: 'redux'},
    {iconId: 'gitIcon', name: 'git'},
    {iconId: 'tsIcon', name: 'ts'},
    {iconId: 'styledComponents', name: 'sc'},
    {iconId: 'githubIcon', name: 'github'},
]
export function SkillsSection() {
    return (
        <StyledSection>
            <StyledTitle>Skills</StyledTitle>
            <StyledWrapSkills>
                <SkillSimple skillItems={skillItems}/>
            </StyledWrapSkills>
        </StyledSection>
    );
}

const StyledSection = styled.section
`
    max-width: 1200px;
    margin: 0 auto;
    background: url(${dots}) no-repeat left center;
    
    padding-bottom: 60px;
`

const StyledWrapSkills = styled.div
`

`