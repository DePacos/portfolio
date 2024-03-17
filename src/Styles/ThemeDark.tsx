import footerBg from "../assets/images/footer-bg-dark.svg";
import ellipse from '../assets/icon/ellipse-dark.svg'
import cross from '../assets/icon/cross-dark.svg'
import dots from '../assets/icon/dots-dark.svg'

export const glThemeDark = {
    colors:{
        fontColor: '#fff',
        fontLight: '#fff',
        fontDark: '#393939',
        fontNameColor: '#2157f2',
        fontProjColor: '#fff',
        linkMainColor: '#6c92ff',
        linkMainHoverColor: '#a6bcfa',
        linkProjColor: '#a6bcfa',
    },
    bg:{
        bgColor: '#222',
        bgButton: '#2157f2',
        bgSocIcon: '#24335c',
        bgMobileMenu: 'rgba(33, 60, 138, 0.95)',
        headerBg: `linear-gradient(90deg,rgba(36,51,92,1) 30%,rgba(34,34,34,1) 30%)`,
        bgMainTitle: 'linear-gradient(0deg, rgba(57, 57, 57, .5), rgba(0, 66, 255, .05))',
        skillsBgImg: `url(${dots})`,
        skillsBgIcon: '#24335c',
        projectBg: '#353535',
        projectBtnBg: '#fff',
        formWrapBg: '#2c2b2b',
        formInputBg: '#393838',
        footerBgImg: `url(${footerBg}) no-repeat, linear-gradient(0deg,rgba(36,51,92,1) 40%,rgba(255,255,255,0) 40%)`,
    },
    border:{
        mainBorder: 'rgba(85, 96, 128, 1)',
        skillsBorder: '#222',
        projBtnBorder: '#4c546c',
    },
    icon:{
        mainEllipse: `url(${ellipse}) no-repeat`,
        mainCross: `url(${cross}) no-repeat`,
    },
    media:{
        mobile: 'screen and (max-width: 430px)',
        tabletMax: 'screen and (max-width: 768px)',
        tabletMin: 'screen and (min-width: 769px)',
        mobileMax: 'screen and (max-width: 576px)',
    },
}