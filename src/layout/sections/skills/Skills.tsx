import React from 'react';
import {S} from "./Skills_Styles";
import {StyledTitle} from "../../../components/title/Title";
import {SkillSimple} from "./skillSimple/SkillSimple";

import {SkillsData} from "../../../App";

type SkillsSectionPropsType = {
    skillsData: SkillsData[]
}
export const Skills: React.FC<SkillsSectionPropsType> = (props: SkillsSectionPropsType) => {
    return (
        <S.SkillsSection id="skills">
            <S.Container>
                <StyledTitle>Skills</StyledTitle>
                <SkillSimple
                    skillsData={props.skillsData}
                />
            </S.Container>
        </S.SkillsSection>
    );
}
