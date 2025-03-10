import { CONTENT_WEB } from "../core/constants/content";
import {
  AddressIcon,
  BornIcon,
  EmailIcon,
  PhoneNumberIcon,
} from "../shared/components/iconComponent";

const PersonInfomationComponent: React.FC = function () {
  return (
    <div className="p-2">
      <div className="flex gap-2 h-25 md:h-40 items-end">
        <div className="bg-gray-200 w-1/3 rounded-md h-full"></div>
        <div className="w-2/3">
          <h2 className="text-md sm:text-2xl font-bold">
            {CONTENT_WEB.INFO_OBJECT.name}
          </h2>
          <h3 className="text-md sm:text-xl font-semibold">
            {CONTENT_WEB.INFO_OBJECT.techField}
          </h3>
        </div>
      </div>
      <ul className="mt-6 ms-1">
        <li className="mb-2 flex gap-2 items-end">
          <BornIcon />
          <span className="text-sm font-semibold underline">
            {CONTENT_WEB.INFO_OBJECT.born}
          </span>
        </li>
        <li className="mb-2 flex gap-2 items-end">
          <AddressIcon />
          <span className="text-sm font-semibold underline">
            {CONTENT_WEB.INFO_OBJECT.address}
          </span>
        </li>
        <li className="mb-2 flex gap-2 items-end">
          <PhoneNumberIcon />
          <span className="text-sm font-semibold underline">
            {CONTENT_WEB.INFO_OBJECT.phoneNumber}
          </span>
        </li>
        <li className="mb-2 flex gap-2 items-end">
          <EmailIcon />
          <span className="text-sm font-semibold underline">
            {CONTENT_WEB.INFO_OBJECT.email}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PersonInfomationComponent;
