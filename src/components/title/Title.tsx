import styled from "styled-components";

export const StyledTitle = styled.h2
`
    font-family: Roboto, sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 43px;
    text-align: center;
    margin-bottom: 50px;
    color: ${({theme}) => theme.colors.fontColor};
    &::after{
        content: '';
        display: block;
        width: 18px;
        height: 18px;
        margin: 15px auto 0 auto;
        border-radius: 50%;
        background:linear-gradient(rgba(166, 188, 250, 1), rgba(33, 87, 242, 1));
    }
    
`
