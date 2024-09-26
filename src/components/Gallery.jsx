import '../styles/_galleryProjects.scss';
import galleryProjects from '../data/GalleryProjects';
import { useState } from 'react';
import GalleryModal from '../components/GalleryModal';

export default function Gallery() {
    const [selectedProject, setSelectedProject] = useState(null);

    const sortedProjects = galleryProjects.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
        <div id="projects" className="gallery">
            <h2 className="gallery__title">RÉALISATIONS</h2>
            {sortedProjects.map((project) => (
                <div key={project.title} className="gallery__card">
                    <img
                        src={project.cover}
                        alt={project.title}
                        className="gallery__cover"
                    />
                    <div className="overlay">
                        <h3>{project.title}</h3>
                        <button onClick={() => setSelectedProject(project)}>
                            + d'infos
                        </button>
                    </div>
                </div>
            ))}

            <GalleryModal
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
            />
        </div>
    );
}
