import React from 'react';
import {MainPhoto} from "./mainPhoto/MainPhoto";
import {MainTitle} from "./mainTitle/MainTitle";
import {StyledButton} from "../../../components/button/Button";
import {Icon} from "../../../components/icons/Icon";
import styled from "styled-components";

export function MainSection(props) {
  return (
    <StyledSection>
      <StyledWrapSection>
        <StyledWrapGrid>
          <StyledWrap>
            <StyledWrapIconCross>
              <Icon iconId={'crossDark'} size={'107'} viewBox={'0 0 107 107'}/>
            </StyledWrapIconCross>
            <MainPhoto/>
          </StyledWrap>
          <StyledWrap>
            <MainTitle/>
            <StyledWrapLink>
              <StyledProjButton>
                See Projects
                <Icon iconId={'arrowRight'} size={'28'} viewBox={'0 0 28 28'}/>
              </StyledProjButton>
              <StyledLink>Download Resume</StyledLink>
            </StyledWrapLink>
          </StyledWrap>
        </StyledWrapGrid>
        <StyledWrapIconCircle>
          <Icon iconId={'circleDark'} size={'152'} viewBox={'0 0 152 152'}/>
        </StyledWrapIconCircle>
      </StyledWrapSection>
    </StyledSection>
  );
}

const StyledSection = styled.section
  `
      background: linear-gradient(90deg, rgba(36, 51, 92, 1) 30%, rgba(255, 255, 255, 0) 30%);
      padding-bottom: 20px;
      margin-bottom: 40px;
  `

const StyledWrapSection = styled.div
  `
      position: relative;
      max-width: 1160px;
      margin: 0 auto;
  `

const StyledWrapGrid = styled.div
  `
      display: grid;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
      backdrop-filter: blur(8px);
      position: relative;
      z-index: 1;
      align-items: center;
      justify-items: center;
      ////padding: 42px 0;
      background: linear-gradient(0deg, rgba(57, 57, 57, .5), rgba(0, 66, 255, .05));
      border: 2px solid rgba(85, 96, 128, 1);
      border-radius: 200px 0;
  `

const StyledWrap = styled.div
  `
      position: relative;
  `

const StyledWrapIconCircle = styled.div
  `
      position: absolute;
      right: -5px;
      bottom: -15px;
  `
const StyledWrapIconCross = styled.div
  `
      position: absolute;
      right: 90px;
      top: -90px;
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
      font-family: Roboto-Medium;
      font-size: 15px;
      line-height: 22px;
      display: grid;
      grid-template-columns: 1fr 28px;
      align-items: center;
      gap: 14px;
      padding: 13px 36px;
      border-radius: 20px;
      background-color: #2157f2;
      transition: transform 0.4s;
      cursor: pointer;

      &:hover {
          transform: scale(1.05);
      }
  `

const StyledLink = styled.a
  `
      font-family: Roboto-Medium;
      font-size: 16px;
      line-height: 24px;
      color: #6c92ff;
      cursor: pointer;
      transition: color 0.4s;

      &:hover {
          color: #a6bcfa;
      }
  `