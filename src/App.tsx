import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { HeaderSticky } from './components/Header/HeaderSticky';
import { Hero } from './components/Hero';
import { ProjectSection } from './components/ProjectSection';
import { SideBar } from './components/SideBar';
import { SparkleBackground } from './components/SparkleAnimation/SparkleBackground';
import { Reveal } from './components/utils/Reveal';

function App() {
  return (
    <div className="w-full bg-bg-main text-text-main font-poppins ">
      <div className="min-h-screen flex">
        <SideBar />
        <main className="flex-grow w-80">
          <HeaderSticky />
          <div className="w-full px-16 md:px-36 space-y-32 pb-24 py-20">
            <Reveal width="100%">
              <Hero />
            </Reveal>
            <Reveal width="100%">
              <About />
            </Reveal>
            <Reveal width="100%">
              <ProjectSection />
            </Reveal>
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
