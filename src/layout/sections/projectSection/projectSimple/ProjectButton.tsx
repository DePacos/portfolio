import React from 'react';
import styled from "styled-components";
import {StyledButton} from "../../../../components/button/Button";

type ProjectButtonPropsType = {
    skillsButtonData: Array<string>,
}

export function ProjectButton(props: ProjectButtonPropsType) {
    return (
        <StyledProjectButtonList skillsButtonData={props.skillsButtonData}>
            {props.skillsButtonData.map((name => {return(
             <li><StyledProjectButton>{name}</StyledProjectButton></li>
            )}))}
        </StyledProjectButtonList>
    );
}

const StyledProjectButtonList = styled.ul<ProjectButtonPropsType>
    `
        display: grid;
        grid-template-columns: repeat(${props => props.skillsButtonData.length}, 1fr);
        justify-items: center;
        margin-bottom: 55px;
    `

const StyledProjectButton = styled(StyledButton)
    `
        font-family: Roboto, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 27px;
        text-transform: capitalize;
        width: 159px;
        height: 42px;
        border: 3px solid #4c546c;
        border-radius: 67px;
        background-color: #222222;
        cursor: pointer;
        transition: all .4s;
        
        &:hover{
            background-color: #24335c;
            border: 3px solid #24335c;
        }
    `