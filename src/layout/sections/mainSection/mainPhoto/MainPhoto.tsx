import React from 'react';
import photo from '../../../../assets/images/photo-0.webp'
import {S} from "./MainPhoto-Styles";

export const MainPhoto: React.FC = () => {
    return (
        <>
        <S.MainPhoto>
            <img src={photo} alt="Portfolio-Foto"/>
        </S.MainPhoto>
        </>
    );
}