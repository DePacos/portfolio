import React, {useState, useEffect} from 'react';
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icons/Icon";
import {DesktopMenu} from "../../components/menus/desktop/DesktopMenu";
import {MobileMenu} from "../../components/menus/mobile/MobileMenu";

import {MenuData} from "../../App";

import {S} from './Header_Styles'

export type HeaderPropsType = {
    menuData: MenuData[],
    changeTheme: () => void,
}

export type OffsetPropsType = {
    offset: number
}

export const Header: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {

    const [offset, setOffset] = useState(0);
    const [widthViewport, setWidthViewport] = useState(window.innerWidth);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };

        const handleWindowResize = () => setWidthViewport(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize)

    }, []);

    return (
        <S.Header offset={offset}>
            <S.Container>
                <Logo/>
                {widthViewport < 769 ? <MobileMenu menuData={props.menuData}/>
                                     : <DesktopMenu menuData={props.menuData}/>}
                <S.ChangeThemeBtn onClick={props.changeTheme}>
                    <Icon iconId={'moon'} size={'36'} viewBox={'0 0 90 90'}/>
                </S.ChangeThemeBtn>
            </S.Container>
        </S.Header>

    );
};