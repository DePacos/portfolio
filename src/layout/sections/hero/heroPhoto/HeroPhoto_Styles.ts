import styled from "styled-components";

const MainPhoto = styled.div
    `
        img {
            width: 400px;
            height: 400px;
            object-fit: cover;
            border: 25px solid #fff;
            border-radius: 50%;

            @media screen and (max-width: 991px) {
                width: 335px;
                height: 335px;
            }
            
            @media screen and (max-width: 991px) and (min-width: 769px) {
                margin-right: 30px;
            }

            @media ${({theme}) => theme.media.tabletMax} {
                     margin-bottom: 30px;
            }
            
            @media ${({theme}) => theme.media.mobileMax} {
                width: 190px;
                height: 190px;
                border: 14px solid #fff;
            }
        }
    }
    `

export const S = {
    MainPhoto,
}