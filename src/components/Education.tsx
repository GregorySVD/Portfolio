import { Reveal } from './utils/Reveal';

interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: string;
  specialization?: string;
  skills?: string;
  logo?: string;
}

const educationData: EducationEntry[] = [
  {
    institution: 'WSB Merito University',
    degree: 'Engineer (B.Eng.)',
    field: 'Computer Science',
    startYear: 2023,
    endYear: 'present',
    specialization: 'Cyber Security',
    logo: '/project-imgs/wysza_szkoa_bankowa_w_poznaniu_logo.jpg',
  },
  {
    institution: 'MegaK',
    degree: 'Student / Internship',
    field: 'Web Development (JavaScript & TypeScript)',
    startYear: 2022,
    endYear: '2023',
    skills: 'Node.js - Express - React - SQL - MongoDB - REST API - Git - Jest - HTML - CSS',
    logo: '/project-imgs/megaK.jpg',
  },
  {
    institution: 'Adam Mickiewicz University in Poznań',
    degree: 'Master of Science',
    field: 'Geological and Earth Sciences',
    startYear: 2018,
    endYear: '2020',
    skills: 'Data Analysis - GIS',
    logo: '/project-imgs/uam_poznan_logo.jpg',
  },
  {
    institution: 'Adam Mickiewicz University in Poznań',
    degree: 'Engineer (B.Eng.)',
    field: 'Geology / Earth Science',
    startYear: 2014,
    endYear: '2018',
    logo: '/project-imgs/uam_poznan_logo.jpg',
    skills: 'Vector Graphics - Data Visualization - Research',
  },
];

export const Education = () => {
  return (
    <section id="education" className="w-full ">
      <div className="flex items-center gap-8 mb-12">
        <h2 className="text-5xl font-bold">
          Education<span className="text-accent">.</span>
        </h2>
        <div className="w-full h-[1px] bg-zinc-700"></div>
      </div>
      <div className="space-y-0">
        {educationData.map((edu, index) => (
          <Reveal key={index} width="100%">
            <div className="flex gap-4 py-6 border-b border-zinc-800/70 last:border-b-0">
              {/* Logo */}
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-md bg-zinc-800/50 shrink-0 overflow-hidden">
                {edu.logo ? (
                  <img src={edu.logo} alt={`${edu.institution} logo`} className="w-full h-full object-cover" />
                ) : (
                  <div />
                )}
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                <h3 className="font-semibold text-zinc-100 text-sm md:text-base">{edu.institution}</h3>
                <p className="text-zinc-300 text-xs md:text-sm mt-1">
                  {edu.degree} • {edu.field}
                </p>
                <p className="text-zinc-400 text-xs md:text-sm mt-1">
                  {edu.startYear} – {edu.endYear}
                </p>
                {(edu.specialization || edu.skills) && (
                  <p className="text-zinc-500 text-xs md:text-sm mt-2">
                    {edu.specialization ? `Specialization: ${edu.specialization}` : `Skills: ${edu.skills}`}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="w-full h-[1px] bg-zinc-700 mt-12"></div>
    </section>
  );
};
