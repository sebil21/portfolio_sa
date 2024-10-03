import '../styles/_resume.scss';
import { resume } from '../data/ResumeInfo';
import ButtonCV from '../components/Cv';
import Education from '../components/Education';

export default function Resume() {
    const sortedResume = resume.sort((a, b) => {
        return new Date(b.endDate) - new Date(a.endDate);
    });

    return (
        <div className="resume">
            <h2 id="resume" className="resume__title">
                PARCOURS
            </h2>
            <div className="resume__container">
                {sortedResume.map((job, index) => (
                    <div key={index} className="resume__card">
                        <div>
                            <img src={job.cover} alt={job.companyName} />
                        </div>
                        <div>
                            <h3 className="resume__companyName">
                                {job.companyName}
                            </h3>
                            <div className="resume__info">
                                <p className="resume__location">
                                    {job.location}
                                </p>
                                <p className="resume__dates">{job.date}</p>
                            </div>
                            <ul className="resume__jobTitle">
                                {job.jobTitle.map((title, idx) => (
                                    <li key={idx}>{title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                <div>
                    <Education />
                </div>
                <div className="resume__transitionCV">
                    <p>
                        Avant de commencer ma carrière en tant qu'acheteur, j'ai
                        acquis diverses expériences, y compris des stages, entre
                        2010 et 2014. Ces expériences m'ont permis de développer
                        diverses compétences. Si vous souhaitez en savoir plus
                        sur mon parcours, je vous invite à télécharger mon CV en
                        cliquant sur le bouton ci-dessous.
                    </p>
                    <ButtonCV />
                </div>
            </div>
        </div>
    );
}
