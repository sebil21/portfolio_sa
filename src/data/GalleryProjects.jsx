import cover724events from '../assets/images/724events.webp';
import coverargentbank from '../assets/images/argentbank.webp';
import coverbooki from '../assets/images/booki.webp';
import covercsginformatique from '../assets/images/csginformatique.webp';
import coverkasa from '../assets/images/kasa.webp';
import coverninacarducci from '../assets/images/ninacarducci.webp';
import coverohmyfood from '../assets/images/ohmyfood.webp';
import coverprintit from '../assets/images/printit.webp';
import coverqwenta from '../assets/images/qwenta.webp';
import coverridingcities from '../assets/images/ridingcities.webp';
import coversophiebluel from '../assets/images/sophiebluel.webp';

const galleryProjects = [
    {
        cover: cover724events,
        title: '724 Events',
        date: '08-07-2024',
        description: [
            'React',
            'JavaScript',
            'React Developer Tools',
            'Cahier de recette',
            'Responsive',
        ],
        info: "Débeugger le site vitrine de l'agence évènementielle 724events et compléter le cahier de recette avec différents scénarios pour les tests.",
        lien: 'https://github.com/sebil21/debeug_724events.git',
    },
    {
        cover: coverargentbank,
        title: 'Argent Bank',
        date: '01-08-2024',
        description: [
            'React',
            'Redux',
            'API',
            'mongoDB',
            'JavaScript',
            'Responsive',
        ],
        info: "Implémenter le front-end d'une application bancaire avec React en mettant en place le state global avec Redux et la connexion utilisateur, la possibilité de modifier le userName du client via un formulaire et écrire les différents endpoint dans Swagger pour les opérations de transaction.",
        lien: 'https://github.com/sebil21/argentBank_react.git',
    },
    {
        cover: coverbooki,
        title: 'Booki',
        date: '08-01-2024',
        description: ['HTML', 'CSS', 'Figma', 'Responsive'],
        info: "Créer la page d'accueil d'une agence de voyage avec HTML & CSS via l'intégration d'une maquette Figma.",
        lien: 'https://github.com/sebil21/booki.git',
    },
    {
        cover: covercsginformatique,
        title: 'CSG Informatique',
        date: '04-02-2024',
        description: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Responsive'],
        info: "Amélioration d'un site informatique one-page avec la collaboration de ClearCloud (https://clearcloud.fr/).",
        lien: 'https://www.csginformatique.fr/',
    },
    {
        cover: coverkasa,
        title: 'Kasa',
        date: '19-05-2024',
        description: ['React', 'JavaScript', 'JSON', 'Responsive'],
        info: 'Créer une application web de location immobilière avec React et React Router pour créer une expérience utilisateur moderne et réactive.',
        lien: 'https://github.com/sebil21/kasa.git',
    },
    {
        cover: coverninacarducci,
        title: 'Nina Carducci',
        date: '23-06-2024',
        description: [
            'Référencement SEO',
            'Audit Lighthouse',
            'Accessibilité',
            'Responsive',
        ],
        info: "Optimiser le référencement d'un site de photographe en ajoutant des balises meta, corriger l'accessibilité, minifier le code, etc..",
        lien: 'https://github.com/sebil21/seo_nina_carducci.git',
    },
    {
        cover: coverohmyfood,
        title: 'Oh My Food',
        date: '26-01-2024',
        description: ['HTML', 'SASS', 'Animations', 'Responsive'],
        info: "Améliorer l'interface d'un site mobile avec des animations CSS en démarrant le projet en mobile first.",
        lien: 'https://github.com/sebil21/OhmyFood.git',
    },
    {
        cover: coverprintit,
        title: 'Print It',
        date: '07-03-2024',
        description: ['HTML', 'JavaScript', 'CSS', 'Responsive'],
        info: "Initiation au langage JavaScript en se chargeant de dynamiser le site internet statique d'une imprimerie en y ajoutant un carrousel interactif.",
        lien: 'https://github.com/sebil21/print_it.git',
    },
    {
        cover: coverqwenta,
        title: 'Qwenta',
        date: '18-09-2024',
        description: [
            'Gestion de projet',
            'Veille technologique',
            'Kanban',
            'Spécifications techniques',
        ],
        info: 'Planifier le développement du site Qwenta, spécialisé dans la création et la modification de menu pour les restaurateurs.',
        lien: 'https://github.com/sebil21/qwenta.git',
    },
    {
        cover: coverridingcities,
        title: 'Riding Cities',
        date: '05-01-2024',
        description: ['HTML', 'CSS', 'Responsive'],
        info: 'Premiers pas sur le langage HTML en mettant à jour la page internet de Riding Cities, une association sportive qui promeut le skate en région.',
        lien: 'https://github.com/sebil21/RidingCities.git',
    },
    {
        cover: coversophiebluel,
        title: 'Sophie Bluel - Architecte',
        date: '04-04-2024',
        description: ['HTML', 'CSS', 'JavaScript', 'API'],
        info: "Créer une page web dynamique avec JavaScript pour le site internet d'une architecte d'intérieur en utilisant JavaScript et en communiquant avec une API, ainsi que la gestion des événements utilisateurs et la manipulation des éléments du DOM avec JavaScript.",
        lien: 'https://github.com/sebil21/sophie_bluel_architecte.git',
    },
];
export default galleryProjects;
