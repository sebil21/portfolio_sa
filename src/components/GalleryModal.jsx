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
    );
}

// export default GalleryModal;
