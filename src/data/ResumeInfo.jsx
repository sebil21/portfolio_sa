import sibelco from '../assets/images/sibelco.webp';
import capgemini from '../assets/images/capgemini.webp';
// import other from '../assets/images/other.webp';

const resume = [
    {
        cover: sibelco,
        companyName: 'Sibelco',
        location: 'Paris, La Défense (92)',
        startDate: '2016-08',
        endDate: '2024-02',
        date: 'De Août 2016 à Fevrier 2024 ',
        jobTitle: ['Acheteur indirects'], // en objet pour créer une liste
    },
    {
        cover: capgemini,
        companyName: 'Capgemini',
        location: 'Paris, Boulogne-Billancourt (92)',
        startDate: '2015-05',
        endDate: '2016-01',
        date: 'De Mai 2015 à Janvier 2016 ',
        jobTitle: ['Acheteur IT'],
    },
    // {
    //     cover: other,
    //     companyName: 'Autres expériences',
    //     location: 'Dijon (21)',
    //     startDate: '2010-06',
    //     endDate: '2014-06',
    //     date: 'De 2010 à 2014 ',
    //     jobTitle: [
    //         'FM Logistic - Chef de ligne',
    //         'Brevidex - Assistante commerciale',
    //         'Parker Hannifin - Stage import/export',
    //         'Pick Up Viatges - Stage commercial',
    //     ],
    // },
];

const education = [
    {
        title: 'Développeur Web',
        date: '2024',
    },
];

export { resume, education };
