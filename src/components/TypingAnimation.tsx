import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  textToType: string[];
}

export const TypingAnimation = ({ textToType }: Props) => {
  const [displayedText, setDisplayedText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed] = useState(150);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let typingTimeout: ReturnType<typeof setTimeout>;
    const currentText = textToType[loopIndex % textToType.length];

    if (!deleting && displayedText.length < currentText.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (deleting && displayedText.length > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, typingSpeed / 2);
    } else if (!deleting && displayedText.length === currentText.length) {
      typingTimeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && displayedText.length === 0) {
      setDeleting(false);
      setLoopIndex((prevIndex) => prevIndex + 1);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, deleting, loopIndex]);

  return (
    <div className="flex items-center py-5">
      <h2 className="text-3xl font-bold opacity-100" style={{ minHeight: isSmallScreen ? '120px' : 'auto' }}>
        I&apos;m a{' '}
        <motion.span
          className="inline-block text-accent"
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          {displayedText}
        </motion.span>
        <span className="blinking-cursor">|</span>
      </h2>

      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 2.5rem;
          color: #12ff9d;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from, to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
