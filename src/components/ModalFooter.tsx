import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from './SocialLink';
import { faEye } from '@fortawesome/free-solid-svg-icons';

interface Props {
  deploymentLink: string;
  repoUrl: string;
}

export const ModalFooter = ({ deploymentLink, repoUrl }: Props) => {
  return (
    <div className="text-2xl mt-6">
      <p className="font-extrabold">
        Projects Links<span className="text-accent">.</span>
      </p>
      <div className="text-base flex align-baseline text-accent flex-wrap gap-4">
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="py-2 flex align-baseline gap-2 hover:animate-jump"
        >
          <SocialLink icon={faGithub} size="text-xl" altText={'soure code'} />
          <span> soure code</span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={deploymentLink}
          className="py-2 flex align-baseline gap-2 hover:animate-jump"
        >
          <SocialLink icon={faEye} size="text-xl" altText={'live preview'} />
          <span>live preview</span>
        </a>
      </div>
    </div>
  );
};
