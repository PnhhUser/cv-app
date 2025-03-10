import { useLocation } from "react-router-dom";
import { utils } from "../core/Utils";
import { SkillIcon } from "../shared/components/iconComponent";

const SkillsComponent: React.FC = function () {
  const location = useLocation();
  const pathName = location.pathname.slice(1);

  const title = utils.getTitle(pathName);

  return (
    <div className="p-2">
      <div className="flex gap-2 items-center">
        <SkillIcon />
        <h3 className="text-xl lg:text-2xl font-bold underline">{title}</h3>
      </div>
      <div>ky nang cua toi</div>
    </div>
  );
};

export default SkillsComponent;
