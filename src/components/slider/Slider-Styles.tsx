import styled from "styled-components";

const Slide = styled.div
    `
        margin-bottom: 60px;
        color: ${({theme}) => theme.colors.fontColor};
        span{
            font-family: Roboto, sans-serif;
            font-weight: 500;
            font-size: 28px;
            display: block;
            margin-bottom: 10px;
        }
        .slider-wrapper & img{
            width: 150px;
            margin-bottom: 30px;
            border-radius: 50%;
        }
        p{
            font-family: Roboto, sans-serif;
            font-size: 20px;
        }
    `

export const S = {
    Slide,
}