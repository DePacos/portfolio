import React from 'react';
import styled from "styled-components";
import {MainSection} from "./mainSection/MainSection";

export function Main() {
    return (
        <StyledMain>
            <MainSection/>
        </StyledMain>
    );
}

const StyledMain = styled.main
    `
        background: linear-gradient(90deg, rgba(36, 51, 92, 1) 30%, rgba(255, 255, 255, 0) 30%);
        height: 100vh;
    `