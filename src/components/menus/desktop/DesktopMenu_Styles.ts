import styled from "styled-components";

const DesktopMenu = styled.nav
    `
        a {
            display: block;
            font-size: 16px;
            color: ${({theme}) => theme.colors.fontColor};
            transition: transform .4s;
        }

        ul {
            display: flex;
            gap: 55px;
            margin-right: 65px;
        }
        a.active,
        a:hover {
            transform: scale(1.2);
        }

        @media ${({theme}) => theme.media.tabletMax} {
            display: none;
        }
    `
export const S = {
    DesktopMenu,
}