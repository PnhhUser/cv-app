import { InformationCircleIcon } from "@heroicons/react/16/solid";
import { useLocation } from "react-router-dom";
import { utils } from "../core/Utils";

const ExperienceComponent: React.FC = function () {
  const location = useLocation();
  const pathName = location.pathname.slice(1);

  const title = utils.getTitle(pathName);

  return (
    <div className="p-2">
      <div className="flex gap-2 items-center">
        <InformationCircleIcon className="size-6 bg-black text-white p-1 rounded-md" />
        <h3 className="text-xl lg:text-2xl font-bold underline">{title}</h3>
      </div>
      <div>kinh nghiem</div>
    </div>
  );
};

export default ExperienceComponent;
