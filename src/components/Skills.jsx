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
        </div>
    );
};

export default Skills;
