import '../styles/_modal.scss';

export default function GalleryModal({ selectedProject, setSelectedProject }) {
    if (!selectedProject) return null;

    return (
        <div className="modal">
            <div className="modal__content">
                <i
                    onClick={() => setSelectedProject(null)}
                    className="fa-solid fa-xmark"
                ></i>
                <h4>{selectedProject.title}</h4>

                <section className="modalText">
                    <h5>Projet</h5>
                    <ul>
                        {selectedProject.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </section>

                <section className="modalText">
                    <h5>Objectifs</h5>
                    <p>{selectedProject.info}</p>
                </section>
                <section className="modalLinkButton">
                    {selectedProject.site && (
                        <a
                            href={selectedProject.site}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-solid fa-globe"></i>
                        </a>
                    )}
                    {selectedProject.lien && (
                        <a
                            href={selectedProject.lien}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    )}
                </section>
            </div>
        </div>
    );
}
