import React from 'react';
import {MainPhoto} from "./mainPhoto/MainPhoto";
import {MainTitle} from "./mainTitle/MainTitle";
import {StyledButton} from "../../../components/button/Button";
import {Icon} from "../../../components/icons/Icon";
import styled from "styled-components";

export function MainSection(props) {
  return (
    <SectionStyled>
      <WrapGrid>
        <Wrap>
          <WrapIconCross>
            <Icon iconId={'crossDark'} size={'107'} viewBox={'0 0 107 107'}/>
          </WrapIconCross>
          <MainPhoto/>
        </Wrap>
        <Wrap>
          <MainTitle/>
          <WrapLink>
            <StyledProjButton>
              See Projects
              <Icon iconId={'arrowRight'} size={'28'} viewBox={'0 0 28 28'}/>
            </StyledProjButton>
            <StyledLink>Download Resume</StyledLink>
          </WrapLink>
        </Wrap>
      </WrapGrid>
      <WrapIconCircle>
        <Icon iconId={'circleDark'} size={'152'} viewBox={'0 0 152 152'}/>
      </WrapIconCircle>
    </SectionStyled>
  );
}

const SectionStyled = styled.section
  `
      position: relative;
      max-width: 1160px;
      margin: 0 auto 100px auto;
  `

const WrapGrid = styled.div
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

const Wrap = styled.div
  `
      position: relative;
  `

const WrapIconCircle = styled.div
  `
      position: absolute;
      right: -5px;
      bottom: -15px;
  `
const WrapIconCross = styled.div
  `
      position: absolute;
      right: 90px;
      top: -90px;
  `

const WrapLink = styled.div
  `
      display: grid;
      grid-template-columns: 200px 1fr;
      align-items: center;
      gap: 32px;
  `

const StyledProjButton = styled(StyledButton)
  `
      display: grid;
      grid-template-columns: 1fr 28px;
      align-items: center;
      gap: 14px;
      font-family: Roboto-Medium;
      font-size: 15px;
      line-height: 22px;
      background-color: #2157f2;
      padding: 13px 36px;
      border-radius: 20px;
      cursor: pointer;
      transition: transform 0.4s;

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