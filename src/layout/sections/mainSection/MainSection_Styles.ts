import styled from "styled-components";
import {Button} from "../../../components/button/Button";

const MainSection = styled.section
    `
        background: ${({theme}) => theme.bg.headerBg};
        padding: 170px 40px 20px 40px;
        margin-bottom: 60px;

        @media ${({theme}) => theme.media.tabletMax} {
            padding: 130px 40px 20px 40px;
        }   
        
        @media ${({theme}) => theme.media.mobileMax} {
            padding: 170px 15px 20px 15px;
        }
    }
    `

const Container = styled.div
    `
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      background: ${({theme}) => theme.icon.mainEllipse} bottom right;
      &::before{
          content: '';
          display: block;
          position: absolute;
          z-index: 1;
          top: -55px;
          background: ${({theme}) => theme.icon.mainCross} right;
          width: 460px;
          height: 107px;
          @media ${({theme}) => theme.media.mobileMax} {
              width: 100%;
              right: 20%;
          }
      }
  `
const Wrap = styled.div
    `
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: center;
      padding: 40px 20px;
      backdrop-filter: blur(8px);
      color:${({theme}) => theme.colors.fontColor};
      background: ${({theme}) => theme.bg.bgMainTitle};
      border: 2px solid ${({theme}) => theme.border.mainBorder};
      border-radius: 200px 0;
      z-index: 1;
        @media ${({theme}) => theme.media.tabletMax} {
            grid-template-columns: auto;
            max-width: 590px;
            margin: auto;
            padding: 60px 20px;
            text-align: center;
            }
        }
  `

const WrapLink = styled.div
    `
      display: grid;
      grid-template-columns: 200px 1fr;
      align-items: center;
      gap: 32px;
        @media screen and (max-width: 991px){
            grid-template-columns: auto;
            max-width: 200px;
        }
        @media ${({theme}) => theme.media.tabletMax} {
            margin:auto;
        }
  `

const ProjButton = styled(Button)
    `
      font-family: Roboto, sans-serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 22px;
      display: grid;
      grid-template-columns: 1fr 28px;
      align-items: center;
      gap: 14px;
      padding: 13px 36px;
      border-radius: 20px;
      background-color: ${({theme}) => theme.bg.bgButton};
      color: ${({theme}) => theme.colors.fontLight};
      transition: transform 0.4s;
      cursor: pointer;

      &:hover {
          transform: scale(1.05);
      }
  `
const Link = styled.a
    `
      font-family: Roboto, sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: ${({theme}) => theme.colors.linkMainColor};
      cursor: pointer;
      transition: color 0.4s;

      &:hover {
          color: ${({theme}) => theme.colors.fontColor};
      }
  `
export const S = {
    MainSection,
    Container,
    Wrap,
    WrapLink,
    ProjButton,
    Link,
}