import styled from "styled-components";

export const MainContainer = styled.div
    `
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 30px;
        
        @media ${({theme}) => theme.media.mobileMax} {
            padding: 0 20px;
        }
    `