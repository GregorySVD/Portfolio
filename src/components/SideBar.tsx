import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SideBarLink } from './SideBarLink';

export const SideBar = () => {
  const links = useMemo(
    () => [
      { text: 'About', goToSectionId: 'about' },
      { text: 'Projects', goToSectionId: 'projects' },
      { text: 'Contact', goToSectionId: 'contact' },
    ],
    []
  );

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.goToSectionId));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length > 0) {
          const mostVisibleSection = visibleSections.reduce((prev, current) =>
            prev.intersectionRatio > current.intersectionRatio ? prev : current
          );

          setActiveSection(mostVisibleSection.target.id); // Set the most visible section as active
        }
      },
      {
        threshold: [0.2, 0.4],
        rootMargin: '0px 0px -50% 0px',
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [links]);

  return (
    <motion.nav
      className="bg-bg-dark h-screen sticky top-0 left-0 z-30 flex flex-col items-center min-w-[64px]"
      initial="hidden"
      animate="visible"
    >
      <div className="w-11 h-11 bg-bg-main text-2xl font-extrabold flex items-center justify-center my-4 rounded-md">
        <span className="text-center align-text-bottom">G</span>
        <span className="text-accent">.</span>
      </div>

      {links.map((link, index) => (
        <motion.div key={link.text} className="w-full">
          <SideBarLink
            text={link.text}
            goToSectionId={link.goToSectionId}
            isActive={activeSection === link.goToSectionId}
          />
        </motion.div>
      ))}
      <div className="flex-grow"></div>
    </motion.nav>
  );
};
