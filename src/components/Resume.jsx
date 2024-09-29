import '../styles/_resume.scss';
import { resume } from '../data/ResumeInfo';

export default function Resume() {
    const sortedResume = resume.sort((a, b) => {
        return new Date(b.endDate) - new Date(a.endDate);
    });

    return (
        <div className="resume">
            {sortedResume.map((job, index) => (
                <div key={index} className="resume__card">
                    <div className="resume__cover">
                        <img src={job.cover} alt={`${job.companyName} logo`} />
                    </div>
                    <div className="resume__contain">
                        <h3 className="resume__title">{job.companyName}</h3>
                        <div className="resume__info">
                            <p className="resume__location">{job.location}</p>
                            <p className="resume__dates">{job.date}</p>
                        </div>
                        <p className="resume__jobTitle">{job.jobTitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
