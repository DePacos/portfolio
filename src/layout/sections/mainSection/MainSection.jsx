import React from 'react';
import {MainPhoto} from "./mainPhoto/MainPhoto";
import {MainTitle} from "./mainTitle/MainTitle";
import {Icon} from "../../../components/icons/Icon";
import {S} from "./MainSection-Styles";


export const MainSection: React.FC = () => {
  return (
    <S.MainSection>
      <S.Container>
        <S.Wrap>
            <MainPhoto/>
          <div>
            <MainTitle/>
            <S.WrapLink>
              <S.ProjButton>
                See Projects
                <Icon iconId={'arrowRight'} size={'28'} viewBox={'0 0 28 28'}/>
              </S.ProjButton>
              <S.Link href={"/#"}>Download Resume</S.Link>
            </S.WrapLink>
          </div>
        </S.Wrap>
      </S.Container>
    </S.MainSection>
  );
}