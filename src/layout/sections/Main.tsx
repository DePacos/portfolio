import React from 'react';
import styled from "styled-components";
import {MainSection} from "./mainSection/MainSection";
import {SkillsSection} from "./skillsSection/SkillsSection";

export function Main() {
    return (
        <StyledMain>
            <MainSection/>
            <SkillsSection/>
        </StyledMain>
    );
}

const StyledMain = styled.main
    `
    `