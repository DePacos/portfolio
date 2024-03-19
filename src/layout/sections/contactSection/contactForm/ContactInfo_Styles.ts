import styled from "styled-components";
import location from '../../../../assets/icon/location.svg'
import phone from '../../../../assets/icon/phone.svg'
import email from '../../../../assets/icon/email.svg'

const ContactInfo = styled.div
    ` 
        ul{
            display: grid;
            gap: 35px;
        }
        li{
            font-family: Roboto, sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 22px;
            padding-left: 60px;
        }
        li:nth-child(1) {
            background: url(${location}) no-repeat;
        }
        li:nth-child(2) {
            background: url(${phone}) no-repeat;
        }
        li:nth-child(3) {
            background: url(${email}) no-repeat;
        }

        span{
            font-family: Roboto, sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            color: #8b8b8b;
            display: block;
            transition: color .3s;
        }
        a{
        color: ${({theme}) => theme.colors.fontColor};
    }
        a:hover span{
            color: ${({theme}) => theme.colors.fontColor};
        }

        @media screen and (max-width:991px) {
            max-width: 590px;
            width: 100%;
            padding: 50px 0;
            border-radius: 20px;
            box-shadow: 8px 8px 34px rgba(0, 0, 0, .2);
            background-color: ${({theme}) => theme.bg.formWrapBg};
            ul{
                justify-content: center;
            }
            li{
                font-size: calc((100vw - 320px) / (991 - 320) * (28 - 22) + 22px);
                line-height: 40px;
            }
            span{
                font-size: calc((100vw - 320px) / (991 - 320) * (22 - 18) + 18px);
                line-height: 30px;
            }
            
        }
        
    `
export const S = {
    ContactInfo,
}