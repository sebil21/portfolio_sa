import BannerImg from '../assets/images/banner.webp';
import '../styles/_banner.scss';

export default function Banner() {
    return (
        <div className="banner-container">
            <img src={BannerImg} alt="Profil de l'administrateur" />
        </div>
    );
}
