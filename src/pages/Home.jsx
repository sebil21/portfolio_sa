// import Profil from '../components/Profil';
import AboutInfo from '../data/AboutInfo';
import Gallery from '../components/Gallery';
import Skills from '../components/Skills';
import Resume from '../components/Resume';

export default function Home() {
    return (
        <div>
            {/* <Profil /> */}
            <AboutInfo />
            <Gallery />
            <Skills />
            <Resume />
        </div>
    );
}
