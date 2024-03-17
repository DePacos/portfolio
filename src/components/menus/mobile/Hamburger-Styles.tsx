import styled from "styled-components";
import {Button} from '../../button/Button'


const Hamburger = styled(Button)<{open: boolean}>
    `
        display: grid;
        gap: 6px;
        background-color: transparent;

        span {
            display: block;
            width: 30px;
            height: 3px;
            background-color: #fff;
        }

        span:nth-child(2) {
            width: 20px;
            transform: translateX(0);
            transition: transform 0.3s;
        }

        &:hover span:nth-child(2) {
            transform: translateX(10px);
        }
        
        @media ${({theme}) => theme.media.tabletMin}{
            display: none;
        }

    `
export const S = {
    Hamburger,
}