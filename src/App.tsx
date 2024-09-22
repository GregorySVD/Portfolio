import { HeaderSticky } from './components/Header/HeaderSticky';
import { SideBar } from './components/SideBar';
import { Reveal } from './components/utils/Reveal';

function App() {
  return (
    <div className="min-w-full bg-bg-main text-text-main font-poppins">
      <Reveal width="100%">
        <div className="min-h-screen relative flex">
          {/* Sidebar with fixed width and flex-shrink-0 to prevent shrinking */}
          <SideBar />

          {/* Main content area with flex-grow to take up remaining space */}
          <main className="flex-grow">
            <HeaderSticky />
            <div className="text-left p-4">
              <h1 className="text-4xl font-extrabold mb-4">
                Hey, I'm Grzegorz<span className="text-accent">.</span>
              </h1>
              <h2>I'm a Full Stack Developer</h2>
              <p>
                I’ve spent the last 2 years learning how to build Backend and Fronted using Javascript. I'm also a big
                fan of space and outer space technology 🚀. Let's connect
              </p>
              <button className="bg-accent px-4 py-2 mt-4">Contact me</button>
            </div>
          </main>
        </div>
      </Reveal>
    </div>
  );
}

export default App;
