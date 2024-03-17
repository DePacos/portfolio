import React from "react";

import {S} from './Hamburger-Styles'

type HamburgerPropsType  = {
    open: boolean,
    setOpen: (v: boolean) => void
}

export const Hamburger:React.FC<HamburgerPropsType> = (props: HamburgerPropsType) => {
    return (
        <S.Hamburger
            open={props.open}
            onClick={() => props.setOpen(!props.open)}>
            <span></span>
            <span></span>
            <span></span>
        </S.Hamburger>
    )
}