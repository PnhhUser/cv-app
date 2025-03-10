import {
  ExpIcon,
  InfoIcon,
  PrjIcon,
  SkillIcon,
} from "../../shared/components/iconComponent";
import { Nav } from "../../shared/models/dataModel";
import { CONTENT_WEB } from "../constants/content";
import {
  EXPERIENCE_ROUTE,
  PROJECT_ROUTE,
  SKILL_ROUTE,
  ROOT_ROUTE,
} from "../constants/route";

export const navList: Nav[] = [
  {
    name: CONTENT_WEB.TARGET_TXT,
    route: ROOT_ROUTE,
    icon: <InfoIcon />,
  },
  {
    name: CONTENT_WEB.EXPERIENCE_TXT,
    route: EXPERIENCE_ROUTE,
    icon: <ExpIcon />,
  },
  {
    name: CONTENT_WEB.SKILL_TXT,
    route: SKILL_ROUTE,
    icon: <SkillIcon />,
  },
  {
    name: CONTENT_WEB.PROJECT_TXT,
    route: PROJECT_ROUTE,
    icon: <PrjIcon />,
  },
];
