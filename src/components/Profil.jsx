import ProfilImage from '../assets/images/photo_profil.webp';
import '../styles/_profil.scss';

export default function Profil() {
    return (
        <div className="profil-container">
            <img src={ProfilImage} alt="Profil de l'administrateur" />
        </div>
    );
}
