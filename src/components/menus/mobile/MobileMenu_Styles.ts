import styled from "styled-components";

const MobileMenu = styled.nav<{open: boolean}>
    `
        position: absolute;
        width: 250px;
        height: 30vh;
        left: 0;
        top: 30px;
        padding: 25px;
        border-radius: 20px;
        border: 2px solid ${({theme}) => theme.bg.bgMainBorder};
        transform: translate(${({open}) => (open ? "0" : "-300px")}, -10px);
        transition: transform .4s;
        z-index: 1;
        background-color: ${({theme}) => theme.bg.bgMobileMenu};;

        ul {
            display: grid;
            height: 100%;
            align-content: space-around;
        }

        a {
            display: inline-block;
            font-size: 26px;
            color: ${({theme}) => theme.colors.fontColor};
            transition: transform .3s;
        }
        
        a:hover {
            transform: scale(1.10);
        }
    `
export const S = {
    MobileMenu,
}