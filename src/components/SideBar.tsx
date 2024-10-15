import { motion } from 'framer-motion';
import { SideBarLink } from './SideBarLink';

export const SideBar = () => {
  // Variants for the nav rolling from left
  const sidebarVariants = {
    hidden: {
      x: '-100%', // Start off-screen to the left
    },
    visible: {
      x: 0, // Roll in to its normal position
      transition: {
        duration: 0.5, // Adjust the duration for the roll in
      },
    },
  };

  // Variants for links to roll in one by one
  const linkVariants = {
    hidden: {
      opacity: 0,
      x: '-50%',
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Stagger animation by 0.1s for each link
        duration: 0.5, // Speed of the animation for each link
      },
    }),
  };

  const links = [
    { text: 'About', goToSectionId: 'about' },
    { text: 'Projects', goToSectionId: 'projects' },
    { text: 'Contact', goToSectionId: 'contact' },
  ];

  return (
    <motion.nav
      className="bg-bg-dark h-screen sticky top-0 left-0 z-30 flex flex-col items-center min-w-[64px]"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <div className="w-11 h-11 bg-bg-main text-2xl font-extrabold flex items-center justify-center my-4 rounded-md">
        <span className="text-center align-text-bottom">G</span>
        <span className="text-accent">.</span>
      </div>

      {links.map((link, index) => (
        <motion.div
          key={link.text}
          custom={index} // Pass the index to stagger the animation
          initial="hidden"
          animate="visible"
          variants={linkVariants}
          className="w-full"
        >
          <SideBarLink text={link.text} goToSectionId={link.goToSectionId} />
        </motion.div>
      ))}
      <div className="flex-grow"></div>
    </motion.nav>
  );
};
