import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CakeIcon,
} from "@heroicons/react/16/solid";

const PersonInfomationComponent: React.FC = function () {
  return (
    <div className="p-2">
      <div className="flex gap-2 h-25 md:h-40 items-end">
        <div className="bg-gray-200 w-1/3 rounded-md h-full"></div>
        <div className="w-2/3">
          <h2 className="text-md sm:text-2xl font-bold">
            Phùng Ngọc Huy Hoàng
          </h2>
          <h3 className="text-md sm:text-xl font-semibold">Web Developer</h3>
        </div>
      </div>
      <ul className="mt-6 ms-1">
        <li className="mb-2 flex gap-2 items-end">
          <CakeIcon className="size-6 bg-black text-white p-1 rounded-md" />
          <span className="text-sm font-semibold underline">24-3-2000</span>
        </li>
        <li className="mb-2 flex gap-2 items-end">
          <MapPinIcon className="size-6 bg-black text-white p-1 rounded-md" />
          <span className="text-sm font-semibold underline">
            Hòa An, Cẩm Lệ, Tp. Đà Nẵng
          </span>
        </li>
        <li className="mb-2 flex gap-2 items-end">
          <PhoneIcon className="size-6 bg-black text-white p-1 rounded-md" />
          <span className="text-sm font-semibold underline">0869318340</span>
        </li>
        <li className="mb-2 flex gap-2 items-end">
          <EnvelopeIcon className="size-6 bg-black text-white p-1 rounded-md" />
          <span className="text-sm font-semibold underline">
            pnhh240300@gmail.com
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PersonInfomationComponent;
