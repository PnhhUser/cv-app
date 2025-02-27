import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:name" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
