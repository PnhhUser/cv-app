import { CONTENT_WEB } from "../core/constants/content";
import { EduIcon } from "../shared/components/iconComponent";

const EducationComponent: React.FC = function () {
  return (
    <div className="p-2">
      <div className="flex gap-2">
        <EduIcon />
        <h3 className="text-xl font-bold underline"> Học vấn </h3>
      </div>
      <ul className="mt-1">
        <li className="font-bold uppercase">
          {CONTENT_WEB.INFO_OBJECT.college}
        </li>
        <li className="text-sm text-gray-500 ps-1">
          (<span>{CONTENT_WEB.INFO_OBJECT.fromYear}</span> -{" "}
          <span>{CONTENT_WEB.INFO_OBJECT.toYear}</span>)
        </li>
        <li className="font-semibold mt-2">
          Chuyên ngành: {CONTENT_WEB.INFO_OBJECT.major}
        </li>
        <li className="font-semibold underline">
          Tốt nghiệp {CONTENT_WEB.INFO_OBJECT.degree}
        </li>
        <li className="font-semibold">
          GPA: <span>{CONTENT_WEB.INFO_OBJECT.gpa}</span>
          <span>/4.0</span>
        </li>
      </ul>
    </div>
  );
};

export default EducationComponent;
