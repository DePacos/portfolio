import React from 'react';
import {MainPhoto} from "./mainPhoto/MainPhoto";
import {MainTitle} from "./mainTitle/MainTitle";
import {StyledButton} from "../../../components/button/Button";
import {Icon} from "../../../components/icons/Icon";
import styled from "styled-components";
import ellipse from '../../../assets/icon/ellipse.svg'
import cross from '../../../assets/icon/cross.svg'

export function MainSection() {
  return (
    <StyledSection>
      <StyledWrapSection>
        <StyledWrapGrid>
          <StyledWrap>
            <MainPhoto/>
          </StyledWrap>
          <StyledWrap>
            <MainTitle/>
            <StyledWrapLink>
              <StyledProjButton>
                See Projects
                <Icon iconId={'arrowRight'} size={'28'} viewBox={'0 0 28 28'}/>
              </StyledProjButton>
              <StyledLink href={"/#"}>Download Resume</StyledLink>
            </StyledWrapLink>
          </StyledWrap>
        </StyledWrapGrid>
      </StyledWrapSection>
    </StyledSection>
  );
}

const StyledSection = styled.section
  `
      background: ${({theme}) => theme.colors.bgHeaderDark};
      padding: 0 15px 20px 15px;
      margin-bottom: 40px;
      padding-top: 170px;
  `

const StyledWrapSection = styled.div
  `
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      background: url(${ellipse}) no-repeat bottom right;
      &::before{
          content: '';
          display: block;
          position: absolute;
          z-index: 3;
          top: -90px;
          background: url(${cross}) no-repeat right;
          width: 460px;
          height: 107px;
      }
  `

const StyledWrapGrid = styled.div
  `
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: center;
      padding: 42px 0;
      backdrop-filter: blur(8px);
      background: ${({theme}) => theme.colors.bgMainTitleDark};
      border: 2px solid ${({theme}) => theme.colors.bgMainBorderDark};
      border-radius: 200px 0;
      z-index: 1;
  `

const StyledWrap = styled.div
  `
      position: relative;
  `

const StyledWrapLink = styled.div
  `
      display: grid;
      grid-template-columns: 200px 1fr;
      align-items: center;
      gap: 32px;
  `

const StyledProjButton = styled(StyledButton)
  `
      font-family: Roboto, sans-serif;
      font-size: 15px;
      font-width: 500;
      line-height: 22px;
      display: grid;
      grid-template-columns: 1fr 28px;
      align-items: center;
      gap: 14px;
      padding: 13px 36px;
      border-radius: 20px;
      background-color: ${({theme}) => theme.colors.bgButton};
      transition: transform 0.4s;
      cursor: pointer;

      &:hover {
          transform: scale(1.05);
      }
  `

const StyledLink = styled.a
  `
      font-family: Roboto, sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: ${({theme}) => theme.colors.linkMain};
      cursor: pointer;
      transition: color 0.4s;

      &:hover {
          color: ${({theme}) => theme.colors.linkMainHover};
      }
  `