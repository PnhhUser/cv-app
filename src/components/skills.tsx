import { useLocation } from "react-router-dom";
import { utils } from "../core/Utils";
import { SkillIcon } from "../shared/components/iconComponent";
import { LogoComponent } from "../shared/components/logoComponent";
import images from "../core/constants/images";

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
      <div className="mt-6 gap-6 ps-1 flex flex-wrap ">
        <LogoComponent logo={images.logoHTML} tooltipName="HTML" />
        <LogoComponent logo={images.logoCSS} tooltipName="CSS" />
        <LogoComponent logo={images.logoJS} tooltipName="Javascript" />
        <LogoComponent logo={images.reactLogo} tooltipName="ReactJS" />
        <LogoComponent logo={images.logoAngular} tooltipName="Angular" />
        <LogoComponent logo={images.logoJava} tooltipName="Java" />
        <LogoComponent logo={images.logo_c} tooltipName="C#" />
        <LogoComponent logo={images.logoMysql} tooltipName="Mysql" />
        <LogoComponent logo={images.logoMongoDb} tooltipName="MongoDB" />
        <LogoComponent logo={images.logoTailwind} tooltipName="Tailwind CSS" />
        <LogoComponent logo={images.logoAnt} tooltipName="Ant Design" />
        <LogoComponent logo={images.logoJquery} tooltipName="Jquery" />
        <LogoComponent logo={images.logoKotlin} tooltipName="Kotlin" />
        <LogoComponent logo={images.logoChakraUI} tooltipName="Chakra UI" />
        <LogoComponent logo={images.logoGit} tooltipName="Github" />
        <LogoComponent logo={images.logoNet} tooltipName="Microsoft .NET" />
      </div>
    </div>
  );
};

export default SkillsComponent;
