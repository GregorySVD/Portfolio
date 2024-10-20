import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconProp;
  link?: string;
  size?: 'text-2xl' | 'text-xl' | 'text-sm';
  altText?: string;
}

export const SocialLink = ({ icon, link, size = 'text-2xl', altText }: Props) => {
  return (
    <span className="transform-none">
      <a target="_blank" href={link} rel="noreferrer" title={altText}>
        <FontAwesomeIcon icon={icon} className={`opacity-50 hover:text-accent hover:opacity-100 ${size}`} />
      </a>
    </span>
  );
};
