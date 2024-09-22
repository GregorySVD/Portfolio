import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconProp; // Assuming `icon` is a string representing a class or icon code
  link: string;
}

export const HeaderLink = ({ icon, link }: Props) => {
  return (
    <span className="transform-none">
      <a target="_blank" href={link} rel="noreferrer">
        <FontAwesomeIcon icon={icon} className="text-2xl opacity-50 hover:text-accent hover:opacity-100" />
      </a>
    </span>
  );
};
