import '../styles/_footer.scss';
import FooterImg from '../assets/images/footer.webp';

export default function Footer() {
    return (
        <>
            <img className="footerImg" src={FooterImg} alt="mandala" />
            <footer className="footer">
                <div className="footer__icons">
                    <a
                        href="mailto:s.alagoz@outlook.fr"
                        className="footer__link"
                    >
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sebil-alagoz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                    >
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                        href="https://github.com/sebil21?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <p className="footer__text">
                    © 2024 Sebil ALAGOZ, Tous droits réservés.
                </p>
            </footer>
        </>
    );
}
