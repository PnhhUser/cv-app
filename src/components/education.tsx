import { AcademicCapIcon } from "@heroicons/react/16/solid";

const EducationComponent: React.FC = function () {
  return (
    <div className="p-2">
      <div className="flex gap-2">
        <AcademicCapIcon className="size-6 bg-black text-white p-1 rounded-md" />
        <h3 className="text-xl font-bold underline"> Học vấn </h3>
      </div>
      <ul className="mt-1">
        <li className="font-bold uppercase">
          Trường cao đẳng công nghệ thông tin Việt - Hàn
        </li>
        <li className="text-sm text-gray-500 ps-1">
          (<span>2018</span> - <span>2021</span>)
        </li>
        <li className="font-semibold mt-2">Chuyên ngành: Ứng dụng phần mềm</li>
        <li className="font-semibold underline">
          Tốt nghiệp Bằng Cử nhân Công nghệ Thông tin
        </li>
        <li className="font-semibold">
          GPA: <span>2.9/4.0</span>
        </li>
      </ul>
    </div>
  );
};

export default EducationComponent;
