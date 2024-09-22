import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HeaderLink } from './HeaderLink';
import { MyResumeBtn } from './HeaderMyResumeBtn';

export const HeaderSticky = () => {
  return (
    <header
      className="
        sticky top-0 z-20
        h-[calc(45px+3.6rem)] px-[3.6rem] 
        flex items-center justify-between
        bg-bg-opaque backdrop-blur-md
        font-bold
      "
    >
      <div className="min-w-32 flex justify-evenly">
        <HeaderLink icon={faGithub} link="https://github.com/GregorySVD" />
        <HeaderLink icon={faLinkedin} link="https://www.linkedin.com/in/grzegorz-terenda/" />
        <HeaderLink icon={faFacebook} link="https://www.facebook.com/grzegorz.terenda/" />
      </div>
      <div>
        <MyResumeBtn />
      </div>
    </header>
  );
};
