import { SideBarLink } from './SideBarLink';

export const SideBar = () => {
  return (
    <nav className="bg-bg-dark h-screen sticky top-0 left-0 z-20 flex flex-col items-center scrollbar-hide min-w-[64px] flex-shrink-0">
      <div className="w-11 h-11 bg-bg-main text-2xl font-extrabold flex items-center justify-center my-4 border-radius rounded-md">
        <span className="text-center align-text-bottom">G</span>
        <span className="text-accent">.</span>
      </div>
      <SideBarLink text="About" goToSectionId="about" />
      <SideBarLink text="Projects" goToSectionId="projects" />
      <SideBarLink text="Exp" goToSectionId="exp" />
      <SideBarLink text="Contact" goToSectionId="contact" />
    </nav>
  );
};
