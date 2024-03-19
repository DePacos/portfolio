import React from 'react';
import {S} from "./SkillSimple_Styles";
import {Icon} from "../../../../components/icons/Icon";

import {SkillsData} from "../../../../App";

type SkillSimplePropsType = {
    skillsData: SkillsData[],
}

export const SkillSimple: React.FC<SkillSimplePropsType> = (props: SkillSimplePropsType) => {

    return (
        <S.SkillSimple>
            {props.skillsData.map((e) => {

                let iconSize = '100'
                let iconViewBox = '0 0 120 120'

                if(e.iconId === 'scIcon'){iconViewBox = '0 0 38 38'}
                if(e.iconId === 'tsIcon'){iconViewBox = '-25 -25 170 170'}
                if(e.iconId === 'jsIcon'){iconViewBox = '-15 -15 150 150'}
                if(e.iconId === 'githubIcon'){iconViewBox = '0 0 30 30'}
                if(e.iconId === 'scssIcon'){iconViewBox = '-10 -10 120 120'}
                if(e.iconId === 'gitIcon'){iconViewBox = '-10 -10 120 120'}
                if(e.iconId === 'reactIcon'){iconViewBox = '-5 -10 120 120'}
                if(e.iconId === 'reduxIcon'){iconViewBox = '-5 0 120 120'}

                return (
                    <li key={e.id}>
                        <Icon iconId={e.iconId} size={iconSize} viewBox={iconViewBox}/>
                        <span>{e.name}</span>
                    </li>
                )
            })}
        </S.SkillSimple>
    );
}
