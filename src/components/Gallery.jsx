import '../styles/_galleryProjects.scss';
import galleryProjects from '../data/GalleryProjects';
import { useState } from 'react';
import GalleryModal from '../components/GalleryModal';
import Filter from '../components/Filter';

export default function Gallery() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [category, setCategory] = useState('All');
    const [showMore, setShowMore] = useState(false); // État pour gérer l'affichage des projets supplémentaires

    const sortedProjects = galleryProjects.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const filteredProjects =
        category === 'All'
            ? sortedProjects
            : sortedProjects.filter((project) => project.category === category);

    // Limiter l'affichage à 3 projets ou tous les projets si showMore est true
    const displayedProjects = showMore
        ? filteredProjects
        : filteredProjects.slice(0, 3);

    return (
        <div id="projects" className="gallery">
            <h2 className="gallery__title">RÉALISATIONS</h2>
            <Filter setCategory={setCategory} />
            <div className="gallery__cardsContain">
                {displayedProjects.map((project) => (
                    <div key={project.title} className="gallery__card">
                        <img
                            src={project.cover}
                            loading="lazy"
                            alt={project.title}
                            className="gallery__cover"
                        />
                        <h3>{project.title}</h3>
                        <div className="overlay">
                            <button onClick={() => setSelectedProject(project)}>
                                + d'infos
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <GalleryModal
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
            />

            {/* Bouton "Afficher plus" */}
            {!showMore && filteredProjects.length > 3 && (
                <button
                    className="gallery__moreBtn"
                    onClick={() => setShowMore(true)}
                >
                    Afficher plus
                </button>
            )}
        </div>
    );
}
