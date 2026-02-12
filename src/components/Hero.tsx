import { MouseEventHandler } from 'react';
import { TypingAnimation } from './TypingAnimation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Hero = () => {
  const options = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Computer Science Student',
    'DevOps Engineer',
    'Cybersecurity Enthusiast',
  ];

  const goToSectionId: MouseEventHandler<HTMLButtonElement> = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="my-12">
      <div className="text-left p-4">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4">
          Hey, I'm Grzegorz<span className="text-accent">.</span>
        </h1>

        <TypingAnimation textToType={options} />

        <p className="text-xl">
          Since 2022, I’ve been working with JavaScript and web technologies, currently focusing on DevOps and system
          reliability as a DevOps Trainee. I’m particularly interested in cybersecurity and understanding how networks,
          infrastructure, and system weaknesses connect, which led me to specialize in Information Systems Security 💻 I
          enjoy collaborative environments like hackathons and tech initiatives, and I’ve previously worked as a Web
          Developer and Vice President of a student research group focused on space and emerging technologies 🚀
        </p>
        <div className="relative">
          <p className="text-2xl mt-5">Let's connect 💫</p>
          <DotLottieReact
            src="/Arrow.lottie"
            loop
            autoplay
            style={{ width: '12rem', height: '12rem', rotate: '0deg', background: 'red' }}
            className="absolute left-28 -top-2 md:left-28 md:-top-8 "
          />
        </div>
        <button
          className="hover:animate-jump animate-once inline-flex items-center justify-center p-0.5 my-5 me-2 bg-accent text-bg-main overflow-hidden text-xl font-medium rounded-md px-5 py-2.5 group bg-gradient-to-br from-transparent to-transparent hover:from-accent hover:to-accent transition-all duration-500 border border-accent"
          onClick={goToSectionId}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};
