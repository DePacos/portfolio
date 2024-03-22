import styled from "styled-components";

import cross from '../../../../assets/icon/cross-skills.svg'

const SkillSimple = styled.ul
    `
        display: grid;
        grid-template-columns: repeat(auto-fill, 190px);
        column-gap: 40px;
        row-gap: 60px;
        justify-content: center;
        justify-items: center;
        text-align: center;
        position: relative;

        li {
            color: ${({theme}) => theme.colors.fontLight}
        }

        span {
            font-family: Roboto, sans-serif;
            font-size: 22px;
            font-weight: 700;
            text-transform: uppercase;
            display: grid;
            align-items: end;
            width: 190px;
            height: 90px;
            border-radius: 24px;
            padding-bottom: 20px;
            background-color: ${({theme}) => theme.bg.skillsBgIcon};
        }

        svg {
            background-color: #173f5f;
            border-radius: 50%;
            border: 10px solid ${({theme}) => theme.border.skillsBorder};
            position: relative;
            padding: 10px;
            margin-top: -30px;
            bottom: -30px;
            animation: rotate-icon 5s 5 linear;
        }
       &::after{
           position: absolute;
           content: '';
           width: 350px;
           height: 350px;
           background: url(${cross});
           right: -20px;
           bottom: -130px;
       }
        @media ${({theme}) => theme.media.mobileMax} {
            grid-template-columns: repeat(auto-fill, 140px);
            row-gap: 40px;
            
            span{
                font-size: 18px;
                width: 140px;
                height: 80px;
            }
        }

        @keyframes rotate-icon {
            0% {
                transform: rotate(0deg);
            }
            //30%{
            //    transform: rotate(360deg);
            //}
            100% {
                transform: rotate(360deg);
            }
        }
    `

export const S = {
    SkillSimple,
}