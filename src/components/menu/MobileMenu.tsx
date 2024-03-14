import React, {useState} from 'react';
import styled from "styled-components";

import {MenuData} from "../../App";
import {StyledButton} from "../button/Button";


type MobileMenuPropsType = {
    menuData: MenuData[];
}

type HamburgerPropsType  = {
    open: boolean,
    setOpen: (v: boolean) => void
}

export const MobileMenu = (props: MobileMenuPropsType) => {

    const [open, setOpen] = useState<boolean>(false);
    // const node = useRef<HTMLDivElement>(null);
    // const close = () => setOpen(false);

    return (
        <StyledWrapMobileMenu>
            <StyledMobileMenu open={open}>
                <CloseMenu open={open} setOpen={setOpen}/>
                <ul>
                    {props.menuData.map((e) => {
                        return <li key={e.id}><a href={e.link}>{e.name}</a></li>
                    })}
                </ul>
            </StyledMobileMenu>
            <Hamburger open={open} setOpen={setOpen}/>
        </StyledWrapMobileMenu>
    );
};

const Hamburger = (props: HamburgerPropsType) => {
    return (
        <StyledHamburger
            open={props.open}
            onClick={() => props.setOpen(!props.open)}
>
            <span></span>
            <span></span>
            <span></span>
        </StyledHamburger>
    )
}

const CloseMenu = (props: HamburgerPropsType) => {
    return(
        <StyledCloseMenu
            open={props.open}
            onClick={() => props.setOpen(!props.open)}
        >
            <span></span>
            <span></span>
        </StyledCloseMenu>
    )
}

const StyledWrapMobileMenu = styled.div
    `
        position: relative;
        width: 100%;
        @media ${({theme}) => theme.media.tabletMin}{
            display: none;
        }
    `

const StyledMobileMenu = styled.nav<{open: boolean}>
    `
        position: absolute;
        width: 250px;
        height: 30vh;
        left: -15px;
        padding: 25px;
        border-radius: 20px;
        border: 1px solid;
        transform: translate(${({open}) => (open ? "0" : "-300px")}, -10px);
        transition: transform .4s;
        z-index: 1;
        //background-color: rgba(33, 87, 242, 0.95);
        background-color: rgba(33, 60, 138, 0.95);

        ul {
            display: grid;
            height: 100%;
            align-content: space-around;
        }

        a {
            display: inline-block;
            font-size: 26px;
            color: #fff;
            transition: transform .3s;
        }


        a:hover {
            transform: scale(1.10);
        }


        @media ${({theme}) => theme.media.tabletMin} {
            display: none;
        }

    `

const StyledHamburger = styled(StyledButton)<{open: boolean}>
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

    `

const StyledCloseMenu = styled(StyledButton)<{open: boolean}>
`
    background-color: transparent;
    height: 30px;
    float: right;
    
span{
    display: block;
    width: 30px;
    height: 3px;
    background-color: #fff;
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