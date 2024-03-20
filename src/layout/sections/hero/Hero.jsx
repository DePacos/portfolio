import React from 'react';
import {HeroPhoto} from "./heroPhoto/HeroPhoto";
import {HeroTitle} from "./heroTitle/HeroTitle";
import {Icon} from "../../../components/icons/Icon";
import {S} from "./Hero_Styles";

export const Hero: React.FC = () => {
  return (
    <S.MainSection id="home">
      <S.Container>
        <S.Wrap>
          <HeroPhoto/>
          <div>
            <HeroTitle/>
            <S.WrapLink>
              <S.Link>
                <a href={'#projects'}>See Projects</a>
                <Icon iconId={'arrowRight'} size={'28'} viewBox={'0 0 28 28'}/>
              </S.Link>
              <S.Link>
                <S.DownloadBtn>Download Resume</S.DownloadBtn>
              </S.Link>
            </S.WrapLink>
          </div>
        </S.Wrap>
      </S.Container>
    </S.MainSection>
  );
}