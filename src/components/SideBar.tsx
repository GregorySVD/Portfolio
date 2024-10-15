import { SideBarLink } from './SideBarLink';

export const SideBar = () => {
  return (
    <nav className="bg-bg-dark h-screen sticky top-0 left-0 z-30 flex flex-col items-center min-w-[64px]">
      <div className="w-11 h-11 bg-bg-main text-2xl font-extrabold flex items-center justify-center my-4 rounded-md">
        <span className="text-center align-text-bottom">G</span>
        <span className="text-accent">.</span>
      </div>
      <SideBarLink text="About" goToSectionId="about" />
      <SideBarLink text="Projects" goToSectionId="projects" />
      <SideBarLink text="Contact" goToSectionId="contact" />
      <div className="flex-grow"></div>
    </nav>
  );
};
