import { SmoothScroll } from './components/SmoothScroll';
import { ThreeScene } from './components/ThreeScene';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';

function App() {
  return (
    <>
      <Loader />
      <SmoothScroll>
        <div className="min-h-screen relative overflow-x-hidden font-sans">
          <ThreeScene />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
