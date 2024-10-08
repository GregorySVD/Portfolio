import { About } from './components/About';
import { HeaderSticky } from './components/Header/HeaderSticky';

import { Hero } from './components/Hero';
import { SideBar } from './components/SideBar';
import { Reveal } from './components/utils/Reveal';
import { Footer } from './components/Footer';
import { ProjectSection } from './components/ProjectSection';

function App() {
  return (
    <div className="min-w-full bg-bg-main text-text-main font-poppins">
      <div className="min-h-screen relative flex">
        <SideBar />
        <main className="flex-grow ">
          <HeaderSticky />
          <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32 pb-24 py-20">
            <Reveal width="100%">
              <Hero />
            </Reveal>
            <Reveal width="100%">
              <About />
            </Reveal>
            <ProjectSection />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
