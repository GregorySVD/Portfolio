import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const projectSection = document.getElementById('contact');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (projectSection) {
      observer.observe(projectSection);
    }

    return () => {
      if (projectSection) {
        observer.unobserve(projectSection);
      }
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 w-12 h-12 bg-gradient-to-br from-accent to-blue-400 text-white text-2xl rounded-full bold transition-opacity duration-500 flex items-center justify-center ${
        isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 '
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="font-bold" />
    </button>
  );
};
