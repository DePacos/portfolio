import React from 'react';
import {S} from "./MainTitle_Styles";

export const MainTitle: React.FC = () => {
    return (
        <>
            <S.Wrap>Hi There
                <span> I am
                    <S.Name> Gregory Lazarev</S.Name>
                </span>
            </S.Wrap>
            <S.MainTitle>A Frontend Developer</S.MainTitle>
        </>
    );
}
