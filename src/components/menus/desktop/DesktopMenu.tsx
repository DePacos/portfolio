import React from 'react';

import {Menu} from "../menu/Menu";
import {S} from './DesktopMenu-Styles'

import {MenuData} from "../../../App";


type DesktopMenuPropsType = {
    menuData: MenuData[];
}

export const DesktopMenu: React.FC<DesktopMenuPropsType> = (props: DesktopMenuPropsType) => {
    return (
        <S.DesktopMenu>
            <Menu menuData={props.menuData}/>
        </S.DesktopMenu>
    );
};
