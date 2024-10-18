interface Props {
  text: string;
  goToSectionId: string;
  isActive: boolean;
}

export const SideBarLink = ({ text, goToSectionId, isActive }: Props) => {
  return (
    <a
      href={`#${goToSectionId}`}
      className={`h-[100px] flex-shrink-0 font-extralight flex items-center justify-center opacity-70 border-r-[1px] border-transparent transition-all duration-100 w-full vertical-writing
        ${isActive ? 'bg-bg-main border-accent opacity-100 text-accent font-semibold' : ''}
        hover:bg-bg-main hover:border-accent hover:opacity-100`}
    >
      {text}
    </a>
  );
};
