import '../styles/_about.scss';
import Profil from '../components/Profil';
export default function About({ introduction, experience, passion, closing }) {
    return (
        <div className="profile-about-container">
            <Profil />
            <div id="about" className="aboutContainer">
                <h2 className="aboutContainer__title">PRÉSENTATION</h2>
                <div className="aboutContainer__text">
                    <p>{introduction}</p>
                    <p>{experience}</p>
                    <p>{passion}</p>
                    <p>{closing}</p>
                </div>
            </div>
        </div>
    );
}
