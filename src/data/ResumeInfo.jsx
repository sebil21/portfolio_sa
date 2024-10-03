import sibelco from '../assets/images/sibelco.webp';
import capgemini from '../assets/images/capgemini.webp';
// import other from '../assets/images/other.webp';

const resume = [
    {
        cover: sibelco,
        companyName: 'Sibelco',
        location: 'La Défense (92)',
        startDate: '2016-08',
        endDate: '2024-02',
        date: 'De Août 2016 à Fevrier 2024 ',
        jobTitle: ['Acheteur indirects'], // en objet pour créer une liste
    },
    {
        cover: capgemini,
        companyName: 'Capgemini',
        location: 'Boulogne-Billancourt (92)',
        startDate: '2015-05',
        endDate: '2016-01',
        date: 'De Mai 2015 à Janvier 2016 ',
        jobTitle: ['Acheteur IT'],
    },
];

const education = [
    {
        title: 'Intégrateur Web',
        date: '2024',
        location: 'OpenClassRooms',
    },
    {
        title: "Formation Pratique à l'Achat",
        date: '2019',
        location: 'Cegos, Paris (75)',
    },
    {
        title: 'BTS Commerce International',
        date: '2011',
        location: 'Lycée Les Arcades, Dijon (21)',
    },
];

export { resume, education };
