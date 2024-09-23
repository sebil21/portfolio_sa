import { useState } from 'react';
import '../styles/_header.scss';

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__title">
                <h1>SEBIL ALAGOZ</h1>
            </div>
            <i
                className={`header__hamburger fa-solid fa-bars ${
                    isMenuOpen ? 'open' : ''
                }`}
                onClick={() => setMenuOpen(!isMenuOpen)}
            ></i>
            <nav className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className="header__navbar">
                    <li>
                        <a href="#about">À PROPOS</a>
                    </li>
                    <li>
                        <a href="#projects">RÉALISATIONS</a>
                    </li>
                    <li>
                        <a href="#skills">COMPÉTENCES</a>
                    </li>
                    <li>
                        <a href="#resume">CV</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
