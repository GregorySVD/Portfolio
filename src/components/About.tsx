import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from './SocialLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { Chip } from './Chip';

export const About = () => {
  return (
    <section id="about" className="py-16 ">
      <div className="flex items-center gap-8 mb-12">
        <h2 className="text-5xl font-bold">
          About<span className="text-accent">.</span>
        </h2>
        <div className="w-full h-[1px] bg-zinc-700"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4 text-xl">
          <div className="relative w-fit">
            <p className="leading-relaxed text-zinc-300">
              Hey! I'm Grzegorz, a Computer Science student seeking my first software engineer role. I focus on creating
              high-quality solutions, with backend experience in Node.js/Express and frontend skills in React and
              Tailwind CSS. I'm always ready to learn new tools that suit the project best.
            </p>
          </div>
          <div className="relative w-fit">
            <p className="leading-relaxed text-zinc-300">
              I currently work as a Geologist, creating geological documentation, visualizing data in cross-sections,
              and building maps with raster, vector, and numerical data.
            </p>
          </div>
          <div className="relative w-fit">
            <p className="leading-relaxed text-zinc-300">
              Outside of work, I'm fascinated by space technology, rocket development, and astronomy discoveries. I'm
              also a second-year part-time Computer Science student and a member of the SEEK Scientific Club, where we
              explore space-related projects.
            </p>
          </div>
          <div className="relative w-fit">
            <p className="leading-relaxed text-zinc-300">
              If you think you've got an opening that I might like, let's connect 🔗
            </p>
          </div>
          <div className="relative w-fit flex gap-3 text-base">
            <p className="text-accent">My links : </p>
            <div className="flex gap-3">
              <SocialLink icon={faGithub} link="https://github.com/GregorySVD" size="text-xl" />
              <SocialLink icon={faLinkedin} link="https://www.linkedin.com/in/grzegorz-terenda/" size="text-xl" />
              <SocialLink icon={faFacebook} link="https://www.facebook.com/grzegorz.terenda/" size="text-xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="mb-6 text-xl ">
            <FontAwesomeIcon icon={faMicrochip} className="text-accent mx-2" />
            Tech I Love
          </h4>
          <div className="flex flex-wrap text-md gap-3">
            <Chip text="JavaScript" />
            <Chip text="TypeScript" />
            <Chip text="CSS" />
            <Chip text="HTML" />
            <Chip text="React" />
            <Chip text="Redux" />
            <Chip text="Node.js" />
            <Chip text="Express" />
            <Chip text="Tailwind" />
            <Chip text="MongoDB" />
            <Chip text="PostgresSQL" />
            <Chip text="MySQL" />
            <Chip text="Prisma" />
            <Chip text="GitHub" />
            <Chip text="NestJs" />
            <Chip text="C#" />
            <Chip text="Postman" />
          </div>
        </div>
      </div>
    </section>
  );
};
