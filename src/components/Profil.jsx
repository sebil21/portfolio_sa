// import ProfilImage from '../assets/images/photo_profil.webp';
import Logo from '../assets/images/logo.webp';
import '../styles/_profil.scss';

export default function Profil() {
    return (
        <div className="profil-container">
            <img src={Logo} alt="Profil de l'administrateur" />
        </div>
    );
}
