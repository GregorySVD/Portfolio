import { MouseEventHandler } from 'react';
import { TypingAnimation } from './TypingAnimation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Hero = () => {
  const options = [
    'Full Stack Developer',
    'React Frontend Developer',
    'Backend Node Developer',
    'Computer Science Student',
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
          For the past 2 years, I've immersed myself in the world of JavaScript, mastering both backend and frontend
          development to build seamless, interactive experiences. Alongside my passion for coding, I’m deeply fascinated
          by space exploration 🚀 pushing the boundaries of technology beyond our planet is just as thrilling as
          building innovative software here on Earth. Currently, I’m proudly pursuing a degree in Computer Science 💻
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
