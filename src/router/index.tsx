import { Routes, Route } from "react-router-dom";
import Layout from "../layouts";
import HomePage from "../pages/Home";
import ExperienceComponent from "../components/experience";
import {
  EXPERIENCE_ROUTE,
  PROJECT_ROUTE,
  TECH_ROUTE,
} from "../core/constants/route";
import SkillsComponent from "../components/skills";
import ProjectsComponent from "../components/projects";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={EXPERIENCE_ROUTE} element={<ExperienceComponent />} />
        <Route path={TECH_ROUTE} element={<SkillsComponent />} />
        <Route path={PROJECT_ROUTE} element={<ProjectsComponent />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
