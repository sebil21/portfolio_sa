import '../styles/_resume.scss';

import { education } from '../data/ResumeInfo';

export default function Education() {
    const sortedEducation = education.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    return (
        <div className="education">
            <h2 className="education__title">FORMATIONS</h2>
            <div className="education__container">
                {sortedEducation.map((education, index) => (
                    <div key={index} className="education__card">
                        <div>
                            <h3 className="education__jobTitle">
                                {education.title}
                            </h3>
                            <div className="education__info">
                                <p className="education__dates">
                                    {education.date}
                                </p>
                                <p className="education__location">
                                    {education.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
