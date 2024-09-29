import '../styles/_skills.scss';
import skills from '../data/SkillsList';

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h2 className="skills__title">COMPÉTENCES</h2>
            <div className="skills__container">
                {skills.map((category, index) => (
                    <div key={index} className="skills__card">
                        <h3 className="skills__subtitle">{category.title}</h3>
                        <div className="skills__list">
                            {category.skills.map((skill, skillIndex) => (
                                <p key={skillIndex} className="skills__text">
                                    {skill}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <p className="skills__description">
                Au cours de mes années d'expérience dans le secteur industriel,
                notamment dans la mise en place de systèmes ERP, j'ai acquis une
                solide compréhension des besoins des utilisateurs et des
                clients. J'ai formé ces derniers sur de nouveaux outils, tout en
                leur fournissant un manuel d'utilisation complet que j'ai
                moi-même élaboré. J'ai également supervisé des phases de tests
                impliquant divers scénarios, en collaboration avec différents
                services, tout en mettant en œuvre une démarche d'amélioration
                continue pour les projets.
            </p>
        </div>
    );
};

export default Skills;
