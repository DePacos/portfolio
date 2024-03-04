import styled from "styled-components";

export const StyledTitle = styled.h2
`
    font-family: Roboto-Bold;
    font-size: 32px;
    line-height: 43px;
    text-align: center;
    margin-bottom: 60px;
    &::after{
        content: '';
        display: block;
        width: 18px;
        height: 18px;
        margin: 5px auto 0 auto;
        border-radius: 50%;
        background:linear-gradient(rgba(166, 188, 250, 1), rgba(33, 87, 242, 1));
    }
    
`
