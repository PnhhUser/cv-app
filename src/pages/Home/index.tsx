import { InformationCircleIcon } from "@heroicons/react/16/solid";
import { useParams } from "react-router-dom";
import { ParamsKey } from "../../core/constants/enum";
import ExperienceComponent from "../../components/experience";
import SkillsComponent from "../../components/skills";
import ProjectsComponent from "../../components/projects";
import { JSX } from "react";

const componentsDynamic: Record<string, JSX.Element> = {
  experience: <ExperienceComponent />,
  skills: <SkillsComponent />,
  projects: <ProjectsComponent />,
};

const isValidParams = (title: string | undefined): boolean => {
  return title !== undefined && Object.keys(ParamsKey).includes(title);
};

function HomePage() {
  const { name } = useParams();

  const title = isValidParams(name)
    ? ParamsKey[name as keyof typeof ParamsKey]
    : "Mục tiêu nghề nghiệp";

  const careerObjective = (
    <div>
      <p className="mt-6 px-4"></p>
    </div>
  );

  const content =
    isValidParams(name) && name !== undefined
      ? componentsDynamic[name]
      : careerObjective;

  return (
    <div className="p-2">
      <div className="flex gap-2 items-center">
        <InformationCircleIcon className="size-6 bg-black text-white p-1 rounded-md" />
        <h3 className="text-2xl font-bold underline">{title}</h3>
      </div>
      {content}
    </div>
  );
}

export default HomePage;
