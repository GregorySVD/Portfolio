import { ProjectCard } from './ProjectCard';

export const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="flex items-center gap-8 mb-12">
        <div className="w-full h-[1px] bg-zinc-700"></div>
        <h2 className="text-5xl font-bold">
          Projects<span className="text-accent">.</span>
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            alt="TodoApp frontend layout"
            deploymentLink="https://app-todo-fe.vercel.app/"
            title="TodoApp [FE]"
            cardMainImg="/project-imgs/TodoApp.png"
            stack="React - TypeScript - CSS"
            repoUrl="https://github.com/GregorySVD/TodoApp"
            projectDescription="A task manager that helps users add, edit, delete, and complete tasks effortlessly, providing a seamless and intuitive experience 🔦 "
          />
          <ProjectCard
            alt="TodoApp backend"
            deploymentLink="https://todo-app-be-two.vercel.app/postgres"
            title="TodoApp [BE]"
            cardMainImg="/project-imgs/TodoApp-BE.png"
            stack="Postgresql - TypeScript - Express - Jest"
            repoUrl="https://github.com/GregorySVD/TodoApp"
            projectDescription="A task management backend that allows users to create, edit, delete, and mark tasks as completed. It handles data efficiently with a PostgreSQL database and ensures smooth API interactions for a seamless task management experience 🍪 "
          />
          <ProjectCard
            alt="test"
            cardMainImg="/project-imgs/UserManagerApp.png"
            deploymentLink="https://user-management-app-murex.vercel.app/"
            title="User Manager"
            stack="React - TypeScript - Redux - Tailwind - JSONPlaceholder"
            repoUrl="https://github.com/GregorySVD/user-management-app"
            projectDescription="The User Management App is a React-based tool for managing and filtering user data. It features real-time search and advanced filtering 🌈 "
          />
        </div>
        <div className="w-full h-[1px] bg-zinc-700"></div>
      </div>
    </section>
  );
};
