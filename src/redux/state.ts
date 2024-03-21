import project_1 from '../assets/images/project-1.webp'
import project_2 from '../assets/images/project-2.webp'
import project_3 from '../assets/images/project-3.webp'
import project_4 from '../assets/images/project-4.webp'

import testimonialImg from '../assets/images/testi-face.webp'

export const dataBase = {
    menuData: [
        {id: 1, name: 'Home', link: 'home'},
        {id: 2, name: 'Skills', link: 'skills'},
        {id: 3, name: 'Projects', link: 'projects'},
        {id: 4, name: 'Testimonial', link: 'testimonial'},
        {id: 5, name: 'Contact', link: 'contact'},
    ],
    skillsData: [
        {id: 1, iconId: 'htmlIcon', name: 'html'},
        {id: 2, iconId: 'cssIcon', name: 'css'},
        {id: 3, iconId: 'scssIcon', name: 'scss'},
        {id: 4, iconId: 'jsIcon', name: 'js'},
        {id: 5, iconId: 'reactIcon', name: 'react'},
        {id: 6, iconId: 'reduxIcon', name: 'redux'},
        {id: 7, iconId: 'gitIcon', name: 'git'},
        {id: 8, iconId: 'tsIcon', name: 'ts'},
        {id: 9, iconId: 'scIcon', name: 'sc'},
        {id: 10, iconId: 'githubIcon', name: 'github'},
    ],
    projectsButtonData: [
        {id: 1, title: 'all'},
        {id: 2, title: 'landing page'},
        {id: 3, title: 'react'},
        {id: 4, title: 'spa'}
    ],
    projectData: [
        {
            id: 1,
            title: 'Story motion for sale English cources',
            image: project_1,
            link: '#',
            type: 'spa',
        },
        {
            id: 2,
            title: 'Story motion for sale English cources',
            image: project_2,
            link: '#',
            type: 'react',
        },
        {
            id: 3,
            title: 'Story motion for sale English cources',
            image: project_3,
            link: '#',
            type: 'spa',
        },
        {
            id: 4,
            title: 'Story motion for sale English cources',
            image: project_4,
            link: '#',
            type: 'landing page',
        },
        {
            id: 5,
            title: 'Story motion for sale English cources',
            image: project_1,
            link: '#',
            type: 'react',
        },
        {
            id: 6,
            title: 'Story motion for sale English cources',
            image: project_2,
            link: '#',
            type: 'spa',
        },
        {
            id: 7,
            title: 'Story motion for sale English cources',
            image: project_3,
            link: '#',
            type: 'react',
        },
        {
            id: 8,
            title: 'Story motion for sale English cources',
            image: project_4,
            link: '#',
            type: 'react',
        },
    ],
    testimonialData: [
        {
            id: 1,
            name: 'Michal John',
            image: testimonialImg,
            testimonial: 'Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.',
        },
        {
            id: 2,
            name: 'Michal John',
            image: testimonialImg,
            testimonial: 'Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.',
        },
        {
            id: 3,
            name: 'Michal John',
            image: testimonialImg,
            testimonial: 'Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.',
        },
    ]
}