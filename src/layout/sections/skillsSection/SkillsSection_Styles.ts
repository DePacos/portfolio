import styled from "styled-components";

const SkillsSection = styled.section
    `
        max-width: 1200px;
        margin: 0 auto 80px auto;
        padding: 0 30px;
        background: ${({theme}) => theme.bg.skillsBgImg} no-repeat left center;
    `
export const S = {
    SkillsSection,
}