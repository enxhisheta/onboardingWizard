import { Routes, Route } from "react-router-dom";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import ResumePage from "./pages/ResumePage";
import CVListPage from "./pages/CVlistPage";
import HomePage from "./pages/HomePage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />{" "}
    <Route path="/step1" element={<Step1 />} />
    <Route path="/step2" element={<Step2 />} />
    <Route path="/step3" element={<Step3 />} />
    <Route path="/resume" element={<CVListPage />} />
    <Route path="/resume/:id" element={<ResumePage />} />
    <Route path="/cvs" element={<CVListPage />} />
  </Routes>
);

export default AppRoutes;
