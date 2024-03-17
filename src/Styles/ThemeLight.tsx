import footerBg from '../assets/images/footer-bg-light.svg'
import ellipse from '../assets/icon/ellipse-light.svg'
import cross from '../assets/icon/cross-light.svg'
import dots from "../assets/icon/dots-light.svg";

export const glThemeLight = {
    colors: {
        fontColor: '#393939',
        fontLight: '#fff',
        fontDark: '#393939',
        fontNameColor: '#2157f2',
        fontProjColor: '#2157f2',
        linkMainColor: '#6c92ff',
        linkMainHoverColor: '#a6bcfa',
        linkProjColor: '#2157f2',
    },
    bg:{
        bgColor: '#fff',
        bgButton: '#2157f2',
        bgSocIcon: '#a5bbf8',
        bgMobileMenu: 'rgb(221, 230, 255, .95)',
        headerBg: `linear-gradient(90deg,rgba(168,188,250,1) 30%,rgba(255,255,255,1) 30%)`,
        bgMainTitle: 'linear-gradient(0deg, rgba(255, 255, 255, .5), rgba(0, 71, 255, .05))',
        skillsBgImg: `url(${dots})`,
        skillsBgIcon: '#a6bcfa',
        projectBg: '#fff',
        projectBtnBg: '#a5bbf8',
        formWrapBg: '#fff',
        formInputBg: '#f5f5f5',
        footerBgImg: `url(${footerBg}) no-repeat, linear-gradient(0deg,rgba(165,187,248,1) 40%,rgba(255,255,255,0) 10%)`
    },
    border:{
        mainBorder: 'rgba(85, 96, 128, 1)',
        skillsBorder: '#fff',
        projBtnBorder: '#a6bcfa'
    },
    icon:{
        mainEllipse: `url(${ellipse}) no-repeat`,
        mainCross: `url(${cross}) no-repeat`,
    },
    media: {
        mobile: 'screen and (max-width: 430px)',
        tabletMax: 'screen and (max-width: 768px)',
        tabletMin: 'screen and (min-width: 769px)',
        mobileMax: 'screen and (max-width: 576px)',
    }
}