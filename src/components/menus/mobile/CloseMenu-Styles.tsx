import styled from "styled-components";
import {Button} from "../../button/Button";

const CloseMenu = styled(Button)<{open: boolean}>
    `
        background-color: transparent;
        height: 30px;
        float: right;

        span{
            display: block;
            width: 30px;
            height: 3px;
            background-color: ${({theme}) => theme.colors.fontColor};
            transition: transform .3s;
        }
        span:first-child{
            transform: rotate(45deg) translateX(2px);
        }
        span:last-child{
            transform: rotate(-45deg) translateX(2px);
        }

        &:hover span:first-child {
            transform: rotate(-45deg) translateX(-2px);
        }
        &:hover span:last-child {
            transform: rotate(45deg) translateX(-2px);
        }
    `
export const S = {
    CloseMenu,
}