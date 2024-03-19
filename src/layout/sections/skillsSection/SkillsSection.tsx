import React from 'react';
import {S} from "./SkillsSection_Styles";
import {StyledTitle} from "../../../components/title/Title";
import {SkillSimple} from "./skillSimple/SkillSimple";

import {SkillsData} from "../../../App";

type SkillsSectionPropsType = {
    skillsData: SkillsData[]
}
export const SkillsSection: React.FC<SkillsSectionPropsType> = (props:SkillsSectionPropsType) => {
    return (
        <S.SkillsSection id="skills">
            <StyledTitle>Skills</StyledTitle>
            <SkillSimple
                skillsData={props.skillsData}
            />
        </S.SkillsSection>
    );
}
