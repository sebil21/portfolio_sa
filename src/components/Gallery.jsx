import '../styles/_galleryProjects.scss';
import galleryProjects from '../data/GalleryProjects';
import { useState } from 'react';

const Gallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // const sortedProjects = galleryProjects.sort(
    //     (a, b) => new Date(b.date) - new Date(a.date)
    // );

    const sortedProjects = galleryProjects.sort((a, b) => {
        const dateA = a.date.split('-').reverse().join('-'); // Reformater en YYYY-MM-DD
        const dateB = b.date.split('-').reverse().join('-');
        return new Date(dateB) - new Date(dateA);
    });

    return (
        <div id="projects" className="gallery">
            <h2 className="gallery__title">RÉALISATIONS</h2>
            {sortedProjects.map((project) => (
                <div key={project.title} className="gallery__item">
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

            {selectedProject && (
                <div className="modal">
                    <div className="modal__content">
                        <i
                            onClick={() => setSelectedProject(null)}
                            class="fa-solid fa-xmark"
                        ></i>
                        <h4>{selectedProject.title}</h4>

                        <section className="modalText">
                            <h5>Projet</h5>
                            <ul>
                                {selectedProject.description.map(
                                    (desc, index) => (
                                        <li key={index}>{desc}</li>
                                    )
                                )}
                            </ul>
                        </section>

                        <section className="modalText">
                            <h5>Objectifs</h5>
                            <p>{selectedProject.info}</p>
                        </section>
                        <section className="modalLinkButton">
                            <a
                                href={selectedProject.lien}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Lien projet
                            </a>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
