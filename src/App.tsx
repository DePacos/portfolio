import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main";
import styled from "styled-components";
import {Footer} from "./layout/footer/Footer";

export type MenuData = {
    id: number;
    name: string;
    link: string;
}

export type SkillsData = {
    id: number;
    iconId: string;
    name: string;
}

export type ProjectData = {
    id: number;
    title: string;
    image: string;
    link: string;
}

type appPropsType = {
    dataBase: {
        menuData: MenuData[],
        skillsData: SkillsData[],
        projectData: ProjectData[],
        skillsButtonData: Array<string>,
    }
}

export function App(props: appPropsType) {
    return (
        <div className="App">
            <StyledContainer>
                <Header menuData={props.dataBase.menuData}/>
                <Main
                    skillsData={props.dataBase.skillsData}
                    skillsButtonData={props.dataBase.skillsButtonData}
                    projectData={props.dataBase.projectData}
                />
                <Footer/>
            </StyledContainer>
        </div>
    );
}

const StyledContainer = styled.div
    `
        max-width: 1440px;
        margin: 0 auto;
    `
