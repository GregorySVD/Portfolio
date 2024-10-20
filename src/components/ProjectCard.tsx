import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { SocialLink } from './SocialLink';
import { useState } from 'react';
import Modal from './Modal';

interface Props {
  alt: string;
  cardMainImg?: string;
  title: string;
  deploymentLink?: string;
  repoUrl?: string;
  stack: string;
  projectDescription: string;
}

export const ProjectCard = ({
  alt,
  cardMainImg = '/project-imgs/InProgress.png',
  title,
  deploymentLink = 'https://github.com/GregorySVD',
  stack,
  repoUrl = 'https://github.com/GregorySVD',
  projectDescription,
}: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="opacity: 1; transform: none;">
      <div
        className="bg-bg-chip cursor-pointer rounded-md aspect-video flex justify-center items-end overflow-hidden 
      "
        onClick={() => setModalOpen(true)}
      >
        <img
          src={cardMainImg}
          alt={alt}
          className="w-3/4 h-5/6 object-cover object-top transition-transform duration-300 hover:scale-110 hover:rotate-2 rounded-md"
        />
      </div>
      <div className="my-4 opacity: 1 px-4 ">
        <div className="gap-4 flex items-center text-2xl">
          <span className="font-bold">{title}</span>
          <div className="w-1/2 h-[1px] bg-zinc-700"></div>
          <SocialLink icon={faGithub} link={repoUrl} size="text-2xl" altText={'source code'} />
          <SocialLink icon={faWindowRestore} link={deploymentLink} altText={'live preview'} size="text-2xl" />
          <div></div>
        </div>
        <div className="relative w-fit overflow-hidden text-accent my-5">{stack}</div>
        <div className="relative w-fit overflow-hidden">
          <span className="text-xl text-zinc-300">{projectDescription}</span>
          <span
            className="text-accent hover:cursor-pointer hover:underline"
            onClick={() => setModalOpen(true)}
          >{`Learn more >`}</span>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={title}
        projectDescription={projectDescription}
        alt={alt}
        cardMainImg={cardMainImg}
        stack={stack}
        deploymentLink={deploymentLink}
        repoUrl={repoUrl}
      />
    </div>
  );
};
