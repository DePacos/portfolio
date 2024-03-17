import React from "react";

import {S} from './CloseMenu-Styles'

type CloseMenuPropsType  = {
    open: boolean,
    setOpen: (v: boolean) => void
}

export const CloseMenu: React.FC<CloseMenuPropsType> = (props: CloseMenuPropsType) => {
    return(
        <S.CloseMenu
            open={props.open}
            onClick={() => props.setOpen(!props.open)}>
            <span></span>
            <span></span>
        </S.CloseMenu>
    )
}