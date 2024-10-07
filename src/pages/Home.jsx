import Banner from '../components/Banner';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import Form from '../components/Form';
import BackToTop from '../components/BackToTop';

export default function Home() {
    return (
        <div>
            <Banner />
            <About />
            <Gallery />
            <Skills />
            <Resume />
            <Form />
            <BackToTop />
        </div>
    );
}
