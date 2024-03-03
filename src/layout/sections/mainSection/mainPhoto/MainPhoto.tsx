import React from 'react';
import photo from '../../../../assets/images/photo-0.webp'
import styled from "styled-components";

export function MainPhoto() {
    return (
        <>
        <StyledPhoto>
            <img src={photo} alt="Portfolio-Foto"/>
        </StyledPhoto>
        </>
    );
}

const StyledPhoto = styled.div
    `
    padding: 42px 0;

    img {
        width: 400px;
        height: 400px;
        object-fit: cover;
        border: 25px solid #fff;
        border-radius: 50%;
    }
`
//