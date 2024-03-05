import React from 'react';
import styled from "styled-components";
import {StyledButton} from "../../../../components/button/Button";

type ProjectButtonPropsType = {
    skillsButtonData: Array<string>,
}

export function ProjectButton(props: ProjectButtonPropsType) {
    return (
        <StyledProjectButtonList>
            {props.skillsButtonData.map((name => {return(
             <li><StyledProjectButton>{name}</StyledProjectButton></li>
            )}))}
        </StyledProjectButtonList>
    );
}

const StyledProjectButtonList = styled.ul
    `
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
    `

const StyledProjectButton = styled(StyledButton)
    `
        font-family: Roboto-Regular;
        font-size: 20px;
        line-height: 27px;
        width: 153px;
        height: 36px;
        border: 3px solid #4c546c;
        border-radius: 67px;
        background-color: #222222;
    `