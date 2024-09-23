export const Hero = () => {
  return (
    <div>
      <div className="text-left p-4">
        <h1 className="text-5xl font-extrabold mb-4">
          Hey, I'm Grzegorz<span className="text-accent">.</span>
        </h1>
        <h2 className="text-3xl">I'm a Full Stack Developer</h2>
        <p className="text-xl">
          I’ve spent the last 2 years learning how to build Backend and Fronted using Javascript. I'm also a big fan of
          space and outer space technology 🚀. Let's connect
        </p>
        <button className="hover:animate-jump animate-once inline-flex items-center justify-center p-0.5 mb-2 me-2 bg-accent text-bg-main overflow-hidden text-sm font-medium rounded-md px-5 py-2.5 group bg-gradient-to-br from-transparent to-transparent hover:from-accent hover:to-accent transition-all duration-500 border border-accent">
          Contact Me
        </button>
      </div>
    </div>
  );
};
