export const Hero = () => {
  return (
    <div className="my-12">
      <div className="text-left py-4">
        <h1 className=" text-6xl md:text-8xl font-extrabold mb-4">
          Hey, I'm Grzegorz<span className="text-accent">.</span>
        </h1>
        <h2 className="text-3xl py-5">I'm a Full Stack Developer</h2>
        <p className="text-xl">
          I’ve spent the last 2 years learning how to build Backend and Fronted using Javascript. I'm also a big fan of
          Space Exploration Technology 🚀 and proud Student of Computer Science 💻
        </p>

        <p className="text-xl mt-5">Let's connect 💫</p>
        <button className="hover:animate-jump animate-once inline-flex items-center justify-center p-0.5 my-5 me-2 bg-accent text-bg-main overflow-hidden text-sm font-medium rounded-md px-5 py-2.5 group bg-gradient-to-br from-transparent to-transparent hover:from-accent hover:to-accent transition-all duration-500 border border-accent">
          Contact Me
        </button>
      </div>
    </div>
  );
};
