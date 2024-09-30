export const Footer = () => {
  return (
    <footer className="h-[200px] bg-gradient-to-b from-bg-main to-bg-dark flex items-center justify-center">
      &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
  );
};
