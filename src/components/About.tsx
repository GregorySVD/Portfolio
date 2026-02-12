import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from './SocialLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { Chip } from './Chip';

export const About = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="flex items-center gap-8 mb-12">
        <h2 className="text-5xl font-bold">
          About<span className="text-accent">.</span>
        </h2>
        <div className="w-full h-[1px] bg-zinc-700"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        {/* LEFT */}
        <div className="space-y-4 text-lg">
          {/* Card */}
          <div className="rounded-lg bg-zinc-900/40 p-4">
            <div className="flex gap-4">
              <p className="leading-relaxed text-zinc-300">
                <span className=" text-accent">Hey! I’m Grzegorz</span>, a Computer Science student currently in my
                third year, specializing in Cyber Security. Since 2022, I’ve been building a strong foundation in web
                technologies, starting with JavaScript and gradually moving closer to infrastructure, systems, and
                reliability.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-lg bg-zinc-900/40 p-4">
            <div className="flex gap-4">
              <p className="leading-relaxed text-zinc-300">
                I currently work as a DevOps Trainee, where I get hands-on experience with cloud environments, system
                monitoring, incident handling, and understanding how applications behave in real-world production
                setups.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-lg bg-zinc-900/40 p-4">
            <div className="flex gap-4">
              <p className="leading-relaxed text-zinc-300">
                Cybersecurity interests me because it requires seeing the bigger picture — how networks, systems, and
                applications communicate, where they fail, and how they can be protected. That mindset strongly
                influences how I approach both learning and building software.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-lg bg-zinc-900/40 p-4">
            <div className="flex gap-4">
              <p className="leading-relaxed text-zinc-200">
                I enjoy collaborative environments like hackathons and tech initiatives. In the past, I spent a year as
                a Web Developer and Vice President of a student research group focused on space and emerging
                technologies 🚀
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-lg bg-zinc-900/40 p-4">
            <div className="flex gap-4">
              <p className="leading-relaxed text-zinc-300">
                If you think we could build something interesting together — let’s connect 🔗
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 text-base">
            <p className="text-accent">My links :</p>
            <div className="flex gap-3">
              <SocialLink icon={faGithub} link="https://github.com/GregorySVD" size="text-xl" />
              <SocialLink icon={faLinkedin} link="https://www.linkedin.com/in/grzegorz-terenda/" size="text-xl" />
              <SocialLink icon={faFacebook} link="https://www.facebook.com/grzegorz.terenda/" size="text-xl" />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col">
          <h4 className="mb-6 text-xl">
            <FontAwesomeIcon icon={faMicrochip} className="text-accent mx-2" />
            Tech I Love
          </h4>

          <div className="flex flex-wrap text-md gap-3">
            <Chip text="JavaScript" />
            <Chip text="TypeScript" />
            <Chip text="HTML" />
            <Chip text="CSS" />
            <Chip text="React" />
            <Chip text="Redux" />
            <Chip text="Node.js" />
            <Chip text="Express" />
            <Chip text="Tailwind" />
            <Chip text="MongoDB" />
            <Chip text="PostgreSQL" />
            <Chip text="MySQL" />
            <Chip text="Prisma" />
            <Chip text="NestJS" />
            <Chip text="GitHub" />
            <Chip text="Postman" />
            <Chip text="C#" />
          </div>
        </div>
      </div>
    </section>
  );
};
