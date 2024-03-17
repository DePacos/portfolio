import React from 'react';
import {S} from "./Social-Styles";

export type SocialPropsType={
    iconLink1?: string
    iconLink2?: string
    iconLink3?: string
    position?: string,
    color?: string
}
export const Social: React.FC<SocialPropsType> = (props: SocialPropsType) => {
    return (
        <S.Social position={props.position}>
            <li><a href="/#"><img src={props.iconLink1} alt={"Social-Instagram"}/></a></li>
            <li><a href="/#"><img src={props.iconLink2} alt={"Social-WhatsApp"}/></a></li>
            <li><a href="/#"><img src={props.iconLink3} alt={"Social-Telegram"}/></a></li>
        </S.Social>
    );
};