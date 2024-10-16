import { TypingAnimation } from './TypingAnimation';

export const Hero = () => {
  return (
    <div className="my-12">
      <div className="text-left py-4">
        <h1 className=" text-6xl md:text-7xl font-extrabold mb-4">
          Hey, I'm Grzegorz<span className="text-accent">.</span>
        </h1>

        <TypingAnimation />

        <p className="text-xl">
          For the past 2 years, I've immersed myself in the world of JavaScript, mastering both backend and frontend
          development to build seamless, interactive experiences. Alongside my passion for coding, I’m deeply fascinated
          by space exploration 🚀 pushing the boundaries of technology beyond our planet is just as thrilling as
          building innovative software here on Earth. Currently, I’m proudly pursuing a degree in Computer Science 💻
        </p>

        <p className="text-xl mt-5">Let's connect 💫</p>
        <button className="hover:animate-jump animate-once inline-flex items-center justify-center p-0.5 my-5 me-2 bg-accent text-bg-main overflow-hidden text-sm font-medium rounded-md px-5 py-2.5 group bg-gradient-to-br from-transparent to-transparent hover:from-accent hover:to-accent transition-all duration-500 border border-accent">
          Contact Me
        </button>
      </div>
    </div>
  );
};
