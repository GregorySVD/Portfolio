interface Props {
  text: string;
  goToSectionId: string;
}

export const SideBarLink = ({ text, goToSectionId }: Props) => {
  return (
    <a
      href={`#${goToSectionId}`}
      className="h-[100px] flex-shrink-0 font-extralight flex items-center justify-center opacity-50 border-r-[1px] border-transparent transition-all duration-100 w-full vertical-writing
  hover:bg-bg-main hover:border-accent hover:opacity-100"
    >
      {text}
    </a>
  );
};
