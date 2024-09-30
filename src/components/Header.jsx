import { useState } from 'react';
import '../styles/_header.scss';

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false); // Fermer le menu lorsque l'élément est cliqué
    };

    return (
        <header className="header">
            <div className="header__title">
                <h1>SEBIL ALAGOZ</h1>
            </div>
            <i
                className={`header__hamburger fa-solid ${
                    isMenuOpen ? 'fa-xmark' : 'fa-bars'
                }`}
                onClick={handleMenuToggle}
            ></i>
            <nav className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className="header__navbar">
                    <li>
                        <a href="#about" onClick={handleMenuItemClick}>
                            PRÉSENTATION
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={handleMenuItemClick}>
                            RÉALISATIONS
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={handleMenuItemClick}>
                            COMPÉTENCES
                        </a>
                    </li>
                    <li>
                        <a href="#resume" onClick={handleMenuItemClick}>
                            PARCOURS
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={handleMenuItemClick}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
