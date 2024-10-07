import '../styles/_about.scss';
import Profil from '../assets/images/profil.webp';

export default function About() {
    return (
        <div className="aboutContainer">
            <h2 className="aboutContainer__title">PRÉSENTATION</h2>
            <div id="about" className="aboutContainer__description">
                <div className="aboutContainer__text">
                    <section>
                        Je suis intégrateur web junior et c'est ici que je vous
                        parle de mon parcours.
                    </section>
                    <section>
                        Forte de{' '}
                        <span>15 ans d'expérience professionnelle</span>, j'ai
                        exploré différents domaines avant de m'orienter, dès
                        2015, vers une carrière en tant qu'
                        <span>acheteuse</span>, où j'ai développé mes
                        compétences de manière autodidacte.
                    </section>
                    <section>
                        Passionnée par l'apprentissage continu, je me suis
                        récemment lancée dans le <span>développement web</span>,
                        un domaine qui me permet de fusionner créativité et
                        innovation tout en maîtrisant les aspects techniques.
                    </section>
                    <section>
                        Je suis toujours prête à relever de{' '}
                        <span>nouveaux défis</span> et à explorer des
                        opportunités de collaboration.
                    </section>
                </div>
                <div className="aboutContainer__imageWrapper">
                    <img
                        src={Profil}
                        loading="lazy"
                        alt="Profil de l'administrateur"
                    />
                </div>
            </div>
        </div>
    );
}
