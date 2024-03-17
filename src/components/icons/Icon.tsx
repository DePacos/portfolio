import React from 'react';
import iconsSprite from '../../assets/icon/sprite.svg'

type IconPropsType = {
    iconId: string,
    size?: string,
    viewBox?: string,
}
export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.size || '50'} height={props.size || '50'} viewBox={props.viewBox || '0 0 50 50'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
        );
};