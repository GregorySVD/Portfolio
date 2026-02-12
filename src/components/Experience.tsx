import { Reveal } from './utils/Reveal';

interface ExperienceEntry {
  company: string;
  title: string;
  employmentType?: string;
  start: string;
  end: string;
  duration?: string;
  location?: string;
  workMode?: string;
  bullets?: string[];
  skills?: string;
  logo?: string;
}

const experienceData: ExperienceEntry[] = [
  {
    company: 'GSK',
    title: 'Intern – SC D&T – Engineering & EHS',
    employmentType: 'Internship',
    start: 'Dec 2024',
    end: 'Present',
    location: 'Poznań, Poland',
    workMode: 'Hybrid',
    skills: 'AI - LLMOps - System Operations - Azure DevOps - Incident Management - System Administration',
    bullets: [
      'Supporting business-critical systems and end users',
      'Monitoring applications and handling incidents (GxP context)',
      'Implementing AI solutions for operational efficiency and problem-solving',
      'Coordinating with internal teams and vendors',
      'Maintaining SharePoint platforms and documentation',
      'Assisting with change management and system improvements',
    ],
    logo: '/project-imgs/glaxosmithkline_logo.jpg',
  },
  {
    company: 'SEEK Scientific Club',
    title: 'Web Developer / Vice President',
    employmentType: 'Volunteering',
    start: 'Oct 2024',
    end: 'Oct 2025',
    location: 'Poznań, Poland',
    workMode: 'On-site',
    skills:
      'Leadership - Event Organization - Team Coordination - Public Speaking - Web Development - Community Building',
    bullets: [
      'Developing and maintaining the organization’s website (WordPress + custom HTML/CSS/JS)',
      'Coordinating technical tasks within the team and supporting junior members',
      'Co-organizing tech events, workshops, and space-related initiatives',
      'Facilitating communication between board members and project teams',
      'Representing the organization during university and external events',
    ],
    logo: '/project-imgs/seek-logo-cropped.png',
  },

  {
    company: 'GEOPROFIL Andrzej Stube',
    title: 'Geologist / Documenter',
    employmentType: 'Full-time',
    start: 'Jul 2020',
    end: 'Nov 2024',
    duration: '4 yrs 5 mos',
    location: 'Poznań, Poland',
    workMode: 'On-site',
    skills: 'GIS - Data interpretation - Technical documentation',
    bullets: [
      'Preparing geological and geotechnical documentation',
      'Interpreting field and laboratory results',
      'Supervising geological work and reporting outcomes',
      'Coordinating with designers and stakeholders',
    ],
    logo: '/project-imgs/geoprofil-logo.jpg',
  },
  {
    company: 'Geoprojekt – Poznań',
    title: 'Engineering Geologist',
    employmentType: 'Full-time',
    start: 'Feb 2019',
    end: 'Jul 2020',
    duration: '1 yr 6 mos',
    location: 'Poznań, Poland',
    workMode: 'On-site',
    skills: 'Geotechnical testing - Teamwork - Field operations',
    bullets: [
      'Performing geotechnical drilling and sampling',
      'Conducting CPT/CPTu, DPL/DPM, and DMT tests',
      'Supporting construction projects with on-site geotechnical work',
      'Working in a team to produce DGI documentation for linear objects',
    ],
    logo: '/project-imgs/gp_newlogo.png',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="w-full">
      <div className="flex items-center gap-8 mb-12">
        <div className="w-full h-[1px] bg-zinc-700"></div>
        <h2 className="text-5xl font-bold">
          Experience<span className="text-accent">.</span>
        </h2>
      </div>
      <div className="space-y-0">
        {experienceData.map((exp, index) => (
          <Reveal key={index} width="100%">
            <div className="flex gap-6 py-6 border-b border-zinc-800/70 last:border-b-0">
              {/* Logo */}
              <div className="w-16 h-16 md:w-12 md:h-12 rounded-md bg-zinc-800/50 shrink-0 overflow-hidden flex items-center justify-center">
                {exp.logo ? (
                  <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                ) : (
                  <div />
                )}
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                <h3 className="font-semibold text-zinc-100 text-sm md:text-base">{exp.company}</h3>
                <p className="text-zinc-300 text-xs md:text-sm mt-1">
                  {exp.title}
                  {exp.employmentType && <span className="text-zinc-400"> · {exp.employmentType}</span>}
                </p>
                <p className="text-zinc-400 text-xs md:text-sm mt-1">
                  {exp.start} — {exp.end}
                  {exp.duration && <span> · {exp.duration}</span>}
                </p>
                {(exp.location || exp.workMode) && (
                  <p className="text-zinc-400 text-xs md:text-sm mt-1">
                    {exp.location}
                    {exp.location && exp.workMode && <span> · </span>}
                    {exp.workMode}
                  </p>
                )}
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="list-disc pl-5 text-zinc-300 text-xs md:text-sm mt-3 space-y-1">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {exp.skills && <p className="text-zinc-500 text-xs md:text-sm mt-3">Skills: {exp.skills}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
