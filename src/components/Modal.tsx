import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  projectDescription: string;
  alt: string;
  cardMainImg: string;
  stack: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, projectDescription, alt, cardMainImg, stack }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 w-full h-full py-12 px-1 backdrop-blur-[12px] flex justify-center cursor-pointer"
      onClick={() => onClose()}
    >
      <button onClick={onClose} className="absolute top-2 right-2 text-2xl">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="bg-bg-chip rounded-lg max-w-700px mx-auto relative cursor-default">
        <img src={cardMainImg} alt={alt} className=" w-full h-1/2 object-cover object-top rounded-t-xl" />
        <div className="px-6">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div className="relative w-fit overflow-hidden text-accent my-5">{stack}</div>
          <p className="text-zinc-300">{projectDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
