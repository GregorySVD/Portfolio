export const MyResumeBtn = () => {
  const handleOpenCV = () => {
    window.open('https://github.com/GregorySVD/Portfolio/blob/dev/src/assets/my-resume.pdf.pdf', '_blank');
  };

  return (
    <div>
      <button
        onClick={handleOpenCV}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-accent rounded-md group bg-gradient-to-br from-transparent to-transparent hover:from-accent hover:to-accent transition-all duration-500 border border-accent"
      >
        <span className="relative px-5 py-2.5 transition-colors duration-500 ease-in-out rounded-md group-hover:bg-accent group-hover:text-bg-main">
          My Resume
        </span>
      </button>
    </div>
  );
};
