import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main";
import styled from "styled-components";
import {Footer} from "./layout/footer/Footer";
import React, {Component} from "react";

import {ThemeProvider} from "styled-components";
import {glThemeDark} from "./Styles/ThemeDark";
import {glThemeLight} from "./Styles/ThemeLight";


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
    type: string;
}

export type ProjectsButtonData = {
    id: number;
    title: string;
}

export type TestimonialData = {
    id: number;
    name: string;
    image: string;
    testimonial: string;
}

type AppPropsType = {
    dataBase: {
        menuData: MenuData[],
        skillsData: SkillsData[],
        projectData: ProjectData[],
        projectsButtonData: ProjectsButtonData[],
        testimonialData: TestimonialData[],
    }
}

type AppStateType = {
    theme: boolean
}

export class App extends Component<AppPropsType, AppStateType> {
    constructor(props: AppPropsType) {
        super(props);

        this.state = {
            theme: false,
        }
    }

    changeTheme = () => {
        this.setState({theme: !this.state.theme})
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme ? glThemeLight : glThemeDark}>
                <StyledApp className="App">
                    <Header menuData={this.props.dataBase.menuData} changeTheme={this.changeTheme}/>
                    <Main
                        skillsData={this.props.dataBase.skillsData}
                        projectsButtonData={this.props.dataBase.projectsButtonData}
                        projectData={this.props.dataBase.projectData}
                        testimonialData={this.props.dataBase.testimonialData}
                    />
                    <Footer/>
                </StyledApp>
            </ThemeProvider>
        );
    }
}

const StyledApp = styled.div
    `
        background-color: ${({theme}) => theme.bg.bgColor};
    `