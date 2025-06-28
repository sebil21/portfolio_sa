import '../styles/_about.scss';
import Profil from '../assets/images/profil.webp';
import ButtonCV from './Cv';

export default function About() {
    return (
        <div className="aboutContainer">
            <h2 className="aboutContainer__title">PRÉSENTATION</h2>
            <div id="about" className="aboutContainer__description">
                <div className="aboutContainer__text">
                    <section>
                        Intégratrice web junior, passionnée par la tech et le
                        design, je mets ma rigueur et ma créativité au service
                        de vos projets digitaux.
                    </section>
                    <section>
                        <span>Curieuse et passionnée</span> par les
                        technologies, je développe des projets web par envie
                        d’apprendre, d’expérimenter et de donner vie à des
                        idées. J'ai développé mes compétences de manière
                        autodidacte.
                    </section>
                    {/* <section>
                        Passionnée par l'apprentissage continu, je me suis
                        récemment lancée dans le <span>développement web</span>,
                        un domaine qui me permet de fusionner créativité et
                        innovation tout en maîtrisant les aspects techniques.
                    </section> */}
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
            {/* <ButtonCV /> */}
        </div>
    );
}
