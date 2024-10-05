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
        date: '2024-07-08',
        description: [
            'React',
            'JavaScript',
            'React Developer Tools',
            'Cahier de recette',
        ],
        info: "Débeugger le site vitrine de l'agence évènementielle 724events et compléter le cahier de recette avec différents scénarios pour les tests.",
        site: 'https://sa-724events.netlify.app/',
        lien: 'https://github.com/sebil21/debeug_724events.git',
        category: 'React',
    },
    {
        cover: coverargentbank,
        title: 'Argent Bank',
        date: '2024-08-01',
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
        category: 'API',
    },
    {
        cover: coverbooki,
        title: 'Booki',
        date: '2024-01-08',
        description: ['HTML', 'CSS', 'Figma', 'Responsive'],
        site: 'https://sa-booki.netlify.app/',
        info: "Créer la page d'accueil d'une agence de voyage avec HTML & CSS via l'intégration d'une maquette Figma.",
        lien: 'https://github.com/sebil21/booki.git',
        category: 'HTML',
    },
    {
        cover: covercsginformatique,
        title: 'CSG Informatique',
        date: '2024-02-04',
        description: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Responsive'],
        info: "Amélioration d'un site informatique one-page avec la collaboration de ClearCloud (https://clearcloud.fr/).",
        site: 'https://www.csginformatique.fr/',
        category: 'HTML',
    },
    {
        cover: coverkasa,
        title: 'Kasa',
        date: '2024-05-19',
        description: ['React', 'JavaScript', 'JSON', 'Responsive'],
        info: 'Créer une application web de location immobilière avec React et React Router pour créer une expérience utilisateur moderne et réactive.',
        site: 'https://sa-kasa.netlify.app/',
        lien: 'https://github.com/sebil21/kasa.git',
        category: 'React',
    },
    {
        cover: coverninacarducci,
        title: 'Nina Carducci',
        date: '2024-06-23',
        description: [
            'Référencement SEO',
            'Audit Lighthouse',
            'Accessibilité',
            'Responsive',
        ],
        info: "Optimiser le référencement d'un site de photographe en ajoutant des balises meta, corriger l'accessibilité, minifier le code, etc..",
        site: 'https://sa-nina-carducci.netlify.app/',
        lien: 'https://github.com/sebil21/seo_nina_carducci.git',
        category: 'Gestion projet',
    },
    {
        cover: coverohmyfood,
        title: 'Oh My Food',
        date: '2024-01-26',
        description: ['HTML', 'SASS', 'Animations', 'Responsive'],
        info: "Améliorer l'interface d'un site mobile avec des animations CSS en démarrant le projet en mobile first.",
        site: 'https://sa-oh-my-food.netlify.app/',
        lien: 'https://github.com/sebil21/OhmyFood.git',
        category: 'HTML',
    },
    {
        cover: coverprintit,
        title: 'Print It',
        date: '2024-03-07',
        description: ['HTML', 'JavaScript', 'CSS', 'Responsive'],
        info: "Initiation au langage JavaScript en se chargeant de dynamiser le site internet statique d'une imprimerie en y ajoutant un carrousel interactif.",
        site: 'https://sa-print-it.netlify.app/',
        lien: 'https://github.com/sebil21/print_it.git',
        category: 'HTML',
    },
    {
        cover: coverqwenta,
        title: 'Qwenta',
        date: '2024-09-18',
        description: [
            'Gestion de projet',
            'Veille technologique',
            'Kanban',
            'Spécifications techniques',
        ],
        info: 'Planifier le développement du site Qwenta, spécialisé dans la création et la modification de menu pour les restaurateurs.',
        lien: 'https://github.com/sebil21/qwenta.git',
        category: 'Gestion projet',
    },
    {
        cover: coverridingcities,
        title: 'Riding Cities',
        date: '2024-01-05',
        description: ['HTML', 'CSS', 'Responsive'],
        info: 'Premiers pas sur le langage HTML en mettant à jour la page internet de Riding Cities, une association sportive qui promeut le skate en région.',
        site: 'https://sa-riding-cities.netlify.app/',
        lien: 'https://github.com/sebil21/RidingCities.git',
        category: 'HTML',
    },
    {
        cover: coversophiebluel,
        title: 'Sophie Bluel',
        date: '2024-04-04',
        description: ['HTML', 'CSS', 'JavaScript', 'API', 'Responsive'],
        info: "Créer une page web dynamique avec JavaScript pour le site internet d'une architecte d'intérieur en utilisant JavaScript et en communiquant avec une API, ainsi que la gestion des événements utilisateurs et la manipulation des éléments du DOM avec JavaScript.",
        lien: 'https://github.com/sebil21/sophie_bluel_architecte.git',
        category: 'API',
    },
];

export default galleryProjects;
