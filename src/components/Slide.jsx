import '../styles/_slide.scss';
import api from '../assets/slide/api.webp';
import css from '../assets/slide/css.webp';
import github from '../assets/slide/github.webp';
import html from '../assets/slide/html.webp';
import javascript from '../assets/slide/javascript.webp';
import mobile from '../assets/slide/mobile.webp';
import react from '../assets/slide/react.webp';
import sass from '../assets/slide/sass.webp';

// Constante contenant les images et leurs alt texts
const images = [
    { src: api, alt: 'logo api' },
    { src: css, alt: 'logo css' },
    { src: github, alt: 'logo github' },
    { src: html, alt: 'logo html' },
    { src: javascript, alt: 'logo javascript' },
    { src: mobile, alt: 'logo mobile' },
    { src: react, alt: 'logo react' },
    { src: sass, alt: 'logo sass' },
];

export default function Slide() {
    return (
        <div className="skills-slide">
            <div className="skills-slide__container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className="skills-slide__card"
                        loading="lazy"
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
                {/* Dupliquer les images pour l'effet de boucle */}
                {images.map((image, index) => (
                    <img
                        key={`duplicate-${index}`}
                        className="skills-slide__card"
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </div>
        </div>
    );
}
