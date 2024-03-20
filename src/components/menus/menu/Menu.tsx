import React from 'react';

import {MenuData} from "../../../App";


type MenuPropsType = {
    menuData: MenuData[];
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {

    const [activeSection, setActiveSection] = React.useState<string>('');

    const isInViewport = (elem: any) => {
        const position = elem.getBoundingClientRect()
        // if (elem.id == 'projects') {
        //     console.log(
        //         'id: ', elem.id,
        //         'position-top:', position.top,
        //         'position-bottom:', position.bottom,
        //     )
        // }
        return (
            position.top >= 0 &&
            position.left >= 0 &&
            position.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            // position.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')
            sections.forEach((section) => {
                if (isInViewport(section)) {
                    setActiveSection(section.id);
                }
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => (window.removeEventListener('scroll', handleScroll))
    }, [])

    return (
        <ul>
            {props.menuData.map((e) => {
                return <li key={e.id}>
                    <a className={`${e.link}` === activeSection ? 'active' : ''}
                       href={`#${e.link}`}>
                        {e.name}
                    </a></li>
            })}
        </ul>
    );
}
