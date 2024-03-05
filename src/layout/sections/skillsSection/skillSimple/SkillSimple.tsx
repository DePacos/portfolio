import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icons/Icon";

export type SkillSimplePropsType = {
    skillsData: {
        id: number;
        iconId: string;
        name: string;
    }[],
}

export function SkillSimple(props: SkillSimplePropsType) {

    return (
        <StyledSkillSimple>
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
        </StyledSkillSimple>
    );
}

const StyledSkillSimple = styled.ul
    `
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;
        text-align: center;

        li {
            margin-bottom: 60px;
        }

        span {
            font-family: Roboto-Bold;
            font-size: 18px;
            line-height: 27px;
            text-transform: uppercase;
            display: grid;
            align-items: center;
            width: 161px;
            height: 91px;
            border-radius: 24px;
            padding-top: 22px;
            background-color: ${({theme}) => theme.colors.bgIcon};
        }

        svg {
            width: max-content;
            background-color: #173f5f;
            border-radius: 50%;
            border: 10px solid #222;
            position: relative;
            padding: 10px;
            bottom: -30px;
        }
    `