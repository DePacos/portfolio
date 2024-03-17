import React, {useState} from 'react';

import {MenuData} from "../../../App";
import {Menu} from "../menu/Menu";
import {Hamburger} from "./Hamburger";
import {CloseMenu} from "./CloseMenu";
import {S} from "./MobileMenu-Styles";


type MobileMenuPropsType = {
    menuData: MenuData[];
}

export const MobileMenu: React.FC<MobileMenuPropsType> = (props: MobileMenuPropsType) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <S.MobileMenu open={open}>
                <CloseMenu open={open} setOpen={setOpen}/>
                <Menu menuData={props.menuData}/>
            </S.MobileMenu>
            <Hamburger open={open} setOpen={setOpen}/>
        </>
    );
};


