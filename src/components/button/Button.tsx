import styled from "styled-components";

export const Button = styled.button
    `
        border: none;
        background-color: ${({theme}) =>theme.bg.bgButton};
        cursor: pointer;
    `