import { lazy, Suspense, useState, useEffect } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';

// Performance optimization: Lazy load non-critical and heavy components
const ThreeScene = lazy(() =>
  import('./components/ThreeScene').then((m) => ({ default: m.ThreeScene }))
);
const Projects = lazy(() =>
  import('./components/Projects').then((m) => ({ default: m.Projects }))
);
const Skills = lazy(() =>
  import('./components/Skills').then((m) => ({ default: m.Skills }))
);
const Education = lazy(() =>
  import('./components/Education').then((m) => ({ default: m.Education }))
);
const Contact = lazy(() =>
  import('./components/Contact').then((m) => ({ default: m.Contact }))
);

// High-fidelity progressive loading fallback
const SectionSkeleton = () => (
  <div className="py-20 md:py-28 container">
    <div className="flex flex-col items-center">
      <div className="h-6 w-28 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-pulse" />
      <div className="h-12 w-64 bg-text-primary/5 rounded-2xl mb-12 animate-pulse" />
      <div className="h-64 w-full bg-white/[0.02] border border-text-primary/5 rounded-2xl animate-pulse" />
    </div>
  </div>
);

function App() {
  const [recruiterMode, setRecruiterMode] = useState(() => {
    return localStorage.getItem('recruiter-mode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('recruiter-mode', String(recruiterMode));
    if (recruiterMode) {
      document.documentElement.classList.add('recruiter-active');
    } else {
      document.documentElement.classList.remove('recruiter-active');
    }
  }, [recruiterMode]);

  return (
    <>
      <Loader />
      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>
      <SmoothScroll>
        <div className="min-h-screen relative overflow-x-hidden font-sans">
          <ScrollProgress />
          <Navbar recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} />
          <main>
            <Hero recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} />
            <About recruiterMode={recruiterMode} />
            <Experience recruiterMode={recruiterMode} />
            <Suspense fallback={<SectionSkeleton />}>
              <Projects recruiterMode={recruiterMode} />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Skills recruiterMode={recruiterMode} />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Education recruiterMode={recruiterMode} />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Contact recruiterMode={recruiterMode} />
            </Suspense>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;

