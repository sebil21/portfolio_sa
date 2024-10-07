import BannerImg from '../assets/images/banner.webp';
import '../styles/_banner.scss';

export default function Banner() {
    return (
        <div className="banner-container">
            <img src={BannerImg} loading="lazy" alt="Paysage en Turquie" />
            <div className="banner-container__textContainer">
                <h1 className="banner-container__text">
                    BIENVENUE<span>,</span>
                </h1>
                <p className="banner-container__text">
                    SUR MON PORTFOLIO<span>.</span>
                </p>
                <p className="banner-container__secondaryText">
                    INTEGRATEUR WEB
                </p>
            </div>
        </div>
    );
}
