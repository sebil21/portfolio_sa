import '../styles/_skills.scss';
import skills from '../data/SkillsList';

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h2 className="skills__title">COMPÉTENCES WEB</h2>
            <div className="skills__container">
                {skills.map((skill, index) => (
                    <div key={index} className="skills__card">
                        <p className="skills__text">{skill}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
