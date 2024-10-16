import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconProp;
  link?: string;
  size?: 'text-2xl' | 'text-xl' | 'text-sm';
}

export const SocialLink = ({ icon, link, size = 'text-2xl' }: Props) => {
  return (
    <span className="transform-none">
      <a target="_blank" href={link} rel="noreferrer">
        <FontAwesomeIcon icon={icon} className={`opacity-50 hover:text-accent hover:opacity-100 ${size}`} />
      </a>
    </span>
  );
};
