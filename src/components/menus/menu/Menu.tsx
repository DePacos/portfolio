import React from 'react';

import {MenuData} from "../../../App";


type MenuPropsType = {
    menuData: MenuData[];
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
            <ul>
                {props.menuData.map((e) => {
                    return <li key={e.id}><a href={e.link}>{e.name}</a></li>
                })}
            </ul>
    );
}
