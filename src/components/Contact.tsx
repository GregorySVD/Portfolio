import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Contact = () => {
  return (
    <div id="contact">
      <div className="flex justify-center my-10">
        <h4 className="text-5xl md:text-7xl font-extrabold mb-4">
          Contact<span className="text-accent">.</span>
        </h4>
      </div>
      <div className="flex justify-center my-10">
        <p>
          Shoot me an email if you want to connect! You can also find me on{' '}
          <a
            target="_blank"
            className="text-accent"
            href="https://www.linkedin.com/in/grzegorz-terenda/"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </p>
      </div>
      <div className="flex justify-center my-10 hover:text-accent transition-colors duration-300 delay-150">
        <a href="mailto:grzegorzterenda@gmail.com ">
          <div className="text-xl">
            <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
            <span>grzegorzterenda@gmail.com</span>
          </div>
        </a>
      </div>
    </div>
  );
};
