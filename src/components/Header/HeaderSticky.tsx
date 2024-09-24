import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from '../SocialLink';
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
        <SocialLink icon={faGithub} link="https://github.com/GregorySVD" />
        <SocialLink icon={faLinkedin} link="https://www.linkedin.com/in/grzegorz-terenda/" />
        <SocialLink icon={faFacebook} link="https://www.facebook.com/grzegorz.terenda/" />
      </div>
      <div>
        <MyResumeBtn />
      </div>
    </header>
  );
};
