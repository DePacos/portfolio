import styled from "styled-components";
import {MainContainer} from "../../../components/container/MainContainer";

const SkillsSection = styled.section
    `
        margin-bottom: 80px;
    `

const Container = styled(MainContainer)
    `
        background: ${({theme}) => theme.bg.skillsBgImg} no-repeat left center;
    `

export const S = {
    SkillsSection,
    Container,
}