import footerBg from "../assets/images/footer-bg-dark.svg";

export const glThemeDark = {
    colors:{
        fontColor: '#fff',
        fontLight: '#fff',
        fontDark: '#000',
    },

    bg:{
        bgColor: '#222',
        footerBgImg: `url(${footerBg}) no-repeat, linear-gradient(0deg,rgba(36,51,92,1) 40%,rgba(255,255,255,0) 10%)`,
    },
    // colors:{
    // bgDark: '#222222',
    // bgLight: '#fff',
    // bgHeaderDark: 'linear-gradient(90deg, rgba(36, 51, 92, 1) 30%, rgba(255, 255, 255, 0) 30%)',
    // bgHeaderLight: 'linear-gradient(90deg, rgba(166, 188, 250, 1) 30%, rgba(255, 255, 255, 0) 30%)',
    // bgMainTitleDark: 'linear-gradient(0deg, rgba(57, 57, 57, .5), rgba(0, 66, 255, .05))',
    // bgMainTitleLight: 'linear-gradient(0deg, rgba(255, 255, 255, .5), rgba(0, 71, 255, .05))',
    // bgMainBorderDark: 'rgba(85, 96, 128, 1)',
    // bgMainBorderLight: 'rgba(85, 96, 128, 1)',
    // bgIcon: '#24335c',
    // bgButton: '#2157f2',
    // linkMain: '#6c92ff',
    // linkMainHover: '#a6bcfa',
    // fontDark: '#000',
    // fontLight: '#fff',
    // focusVisible: '#b97119',
    // },
    media:{
        mobile: 'screen and (max-width: 430px)',
        tabletMax: 'screen and (max-width: 768px)',
        tabletMin: 'screen and (min-width: 769px)',
    },
}