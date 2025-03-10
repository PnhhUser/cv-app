import { useLocation } from "react-router-dom";
import { utils } from "../core/Utils";
import { PrjIcon } from "../shared/components/iconComponent";

const ProjectsComponent: React.FC = function () {
  const location = useLocation();
  const pathName = location.pathname.slice(1);

  const title = utils.getTitle(pathName);

  return (
    <div className="p-2">
      <div className="flex gap-2 items-center">
        <PrjIcon />
        <h3 className="text-xl lg:text-2xl font-bold underline">{title}</h3>
      </div>
      <div>du an cua toi</div>
    </div>
  );
};

export default ProjectsComponent;
