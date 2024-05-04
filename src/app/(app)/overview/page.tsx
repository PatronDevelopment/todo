import { Project } from "@/components/Project";
import dummyData from "@/mocks/dummy.json";
// mock data for testing
import { projectType } from "@/types/types";

// -------

export const metadata = {
  title: "Overview",
};

export default function Page() {
  // mock data for testing
  const projectsData = dummyData.PROJECTS;
  // -----
  return (
    <div className="gap-5 grid grid-cols-2 lg:grid-cols-3 mt-5">
      {projectsData.map((project: projectType) => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          status={project.status}
        />
      ))}
    </div>
  );
}
