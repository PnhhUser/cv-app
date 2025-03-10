import { useLocation } from "react-router-dom";
import { utils } from "../../core/Utils";
import { CONTENT_WEB } from "../../core/constants/content";
import { InfoIcon } from "../../shared/components/iconComponent";

function HomePage() {
  const location = useLocation();
  const pathName = location.pathname.slice(1);

  const title = utils.getTitle(pathName);

  return (
    <div className="p-2">
      <div className="flex gap-2 items-center">
        <InfoIcon />
        <h3 className="text-xl lg:text-2xl font-bold underline">{title}</h3>
      </div>
      <div className="px-6 mt-4">
        <p
          className="leading-[1.8] whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: CONTENT_WEB.CAREER_OBJECTIVE }}
        />
      </div>
    </div>
  );
}

export default HomePage;
