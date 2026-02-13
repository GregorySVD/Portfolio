import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Card wrapper */}
        <div className="relative rounded-2xl border border-zinc-700 bg-zinc-900/40 backdrop-blur-sm px-6 md:px-16 py-16 text-center">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-1 text-xs tracking-widest uppercase border border-accent text-accent rounded-full">
              Contact
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-zinc-100">
            Got something in mind?
            <br />
            <span className="text-accent">Let’s build it together.</span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            If you’re looking for someone focused on reliability, security and clean technical execution — feel free to
            reach out. I’m always open to interesting projects and collaborations.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            {/* Email button (no visible email address) */}
            <a
              href="mailto:grzegorzterenda@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent 
                         bg-accent text-black font-medium px-6 py-3
                         hover:opacity-90 transition"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Send message
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/grzegorz-terenda/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 
                         px-6 py-3 text-zinc-300 hover:bg-zinc-900/60 transition"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
