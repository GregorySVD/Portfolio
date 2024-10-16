import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from '../SocialLink';
import { MyResumeBtn } from './HeaderMyResumeBtn';
import { motion } from 'framer-motion';

export const HeaderSticky = () => {
  const linkVariants = {
    hidden: {
      opacity: 0,
      y: '-50%',
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger animation by 0.1s for each link
        duration: 0.5, // Speed of the animation for each link
      },
    }),
  };

  const links = [
    { icon: faGithub, link: 'https://github.com/GregorySVD' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/grzegorz-terenda/' },
    { icon: faFacebook, link: 'https://www.facebook.com/grzegorz.terenda/' },
  ];

  return (
    <header
      className="
        sticky top-0 z-20
        h-[calc(20px+3.6rem)] px-3.5
        flex items-center justify-between
        bg-bg-opaque backdrop-blur-md
        font-bold
      "
    >
      <motion.div className="min-w-32 flex justify-evenly gap-3">
        {links.map((link, index) => (
          <motion.div key={link.link} initial="hidden" animate="visible" custom={index} variants={linkVariants}>
            <SocialLink icon={link.icon} link={link.link} />
          </motion.div>
        ))}
      </motion.div>

      <div>
        <MyResumeBtn />
      </div>
    </header>
  );
};
