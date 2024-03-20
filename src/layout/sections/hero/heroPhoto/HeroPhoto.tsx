import React from 'react';
import photo from '../../../../assets/images/photo-0.webp'
import {S} from "./HeroPhoto_Styles";

export const HeroPhoto: React.FC = () => {
    return (
        <>
        <S.MainPhoto>
            <img src={photo} alt="Portfolio-Foto"/>
        </S.MainPhoto>
        </>
    );
}