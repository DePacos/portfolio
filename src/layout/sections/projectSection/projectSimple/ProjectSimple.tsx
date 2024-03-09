import React from 'react';
import styled from "styled-components";
import {StyledButton} from "../../../../components/button/Button";

import {ProjectData} from "../../../../App";

type ProjectSimpleTypeProps = {
    projectData: ProjectData[];
}

export function ProjectSimple(props: ProjectSimpleTypeProps) {
    return (
        <StyledProjectSimple>
            {props.projectData.map((e => {
                return (
                    <li>
                        <img src={e.image} alt="Project-Image"/>
                        <div>
                            <h3>{e.title}</h3>
                            <StyledWrapLinks>
                                <StyledProjectButton>Edit for you</StyledProjectButton>
                                <StyledLink href={e.link}>see preview</StyledLink>
                            </StyledWrapLinks>
                        </div>
                    </li>
                )
            }))}
        </StyledProjectSimple>
    );
}

export default ProjectSimple;

const StyledProjectSimple = styled.ul
    `
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(4, 270px);

        li {
            border-radius: 26px;
            overflow: hidden;
            padding-bottom: 25px;
            margin-bottom: 45px;
            background-color: #353535;
        }

        img {
            width: 100%;
            height: 240px;
            object-fit: cover;
        }

        h3 {
            font-family: Kalameh, sans-serif;
            font-size: 22px;
            font-weight: 700;
            line-height: 30px;
            max-width: 204px;;
            margin: 17px auto 25px auto;
        }
    `

const StyledWrapLinks = styled.div
    `
        display: grid;
        grid-template-columns: 109px 74px;
        gap: 20px;
        justify-content: center;
        align-items: center;
    `

const StyledProjectButton = styled(StyledButton)
    `
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        width: 109px;
        height: 29px;
        border-radius: 12px;
        background-color: #fff;
        color: #353535;
        cursor: pointer;
        transition: all 0.4s;
        
        &:hover{
            background-color: #2157f2;
            color: #fff
        }
    `

const StyledLink = styled.a
    `
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #a6bcfa;
        transition: color 0.4s;
        &:hover{
            color: #fff;
        }
    `