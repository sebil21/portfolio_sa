import '../styles/_about.scss';

export default function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutContainer__main">
                Bienvenue sur mon portfolio, je suis <h1>Sebil</h1>, intégrateur
                web junior. C'est ici que je vous parle de mon parcours..
            </div>
            <div id="about" className="aboutContainer__description">
                <h2 className="aboutContainer__title">PRÉSENTATION</h2>
                <div className="aboutContainer__text">
                    <section>
                        Avec <span>15 ans d'expérience professionnelle</span>,
                        j'ai débuté ma carrière en tant qu'
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
            </div>
        </div>
    );
}
